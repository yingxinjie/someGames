/****************************************************************************
 Copyright (c) 2010-2013 cocos2d-x.org
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

#import "AppController.h"
#import "cocos2d.h"
#import "AppDelegate.h"
#import "RootViewController.h"
#import "SDKWrapper.h"
#import "platform/ios/CCEAGLView-ios.h"
#import "WXApi.h"
#include "scripting/js-bindings/jswrapper/SeApi.h"
#import <AVFoundation/AVFoundation.h>
#import <AudioToolbox/AudioToolbox.h>
#import "VoiceConvert.h"
#import <AlipaySDK/AlipaySDK.h>
#import <VerifyCode/NTESVerifyCodeManager.h>
#import <AppTrackingTransparency/ATTrackingManager.h>
#import <sys/utsname.h>
#import <AdSupport/ASIdentifierManager.h>

using namespace cocos2d;

@implementation AppController

Application* app = nullptr;

@synthesize window;

#pragma mark -
#pragma mark Application lifecycle

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [[SDKWrapper getInstance] application:application didFinishLaunchingWithOptions:launchOptions];
    // Add the view controller's view to the window and display.
    float scale = [[UIScreen mainScreen] scale];
    CGRect bounds = [[UIScreen mainScreen] bounds];
    window = [[UIWindow alloc] initWithFrame: bounds];
    
    // cocos2d application instance
    app = new AppDelegate(bounds.size.width * scale, bounds.size.height * scale);
    app->setMultitouch(true);
    
    // Use RootViewController to manage CCEAGLView
    _viewController = [[RootViewController alloc]init];
#ifdef NSFoundationVersionNumber_iOS_7_0
    _viewController.automaticallyAdjustsScrollViewInsets = NO;
    _viewController.extendedLayoutIncludesOpaqueBars = NO;
    _viewController.edgesForExtendedLayout = UIRectEdgeAll;
#else
    _viewController.wantsFullScreenLayout = YES;
#endif
    // Set RootViewController to window
    if ( [[UIDevice currentDevice].systemVersion floatValue] < 6.0)
    {
        // warning: addSubView doesn't work on iOS6
        [window addSubview: _viewController.view];
    }
    else
    {
        // use this method on ios6
        [window setRootViewController:_viewController];
    }
    
    [window makeKeyAndVisible];
    
    [[UIApplication sharedApplication] setStatusBarHidden:YES];
    [[NSNotificationCenter defaultCenter] addObserver:self
        selector:@selector(statusBarOrientationChanged:)
        name:UIApplicationDidChangeStatusBarOrientationNotification object:nil];
    
    //Register to wechat
    NSString* APP_ID = @"wx60924ed4856e0eb5";
    [WXApi registerApp:APP_ID];
    
    //run the cocos2d-x game scene
    app->start();

    return YES;
}

- (void)statusBarOrientationChanged:(NSNotification *)notification {
    CGRect bounds = [UIScreen mainScreen].bounds;
    float scale = [[UIScreen mainScreen] scale];
    float width = bounds.size.width * scale;
    float height = bounds.size.height * scale;
    Application::getInstance()->updateViewSize(width, height);
}

- (void)applicationWillResignActive:(UIApplication *)application {
    /*
     Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
     Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
     */
    app->onPause();
    [[SDKWrapper getInstance] applicationWillResignActive:application];
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    /*
     Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
     */
    app->onResume();
    [[SDKWrapper getInstance] applicationDidBecomeActive:application];
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    /*
     Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
     If your application supports background execution, called instead of applicationWillTerminate: when the user quits.
     */
    [[SDKWrapper getInstance] applicationDidEnterBackground:application];
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    /*
     Called as part of  transition from the background to the inactive state: here you can undo many of the changes made on entering the background.
     */
    [[SDKWrapper getInstance] applicationWillEnterForeground:application];    
}

- (void)applicationWillTerminate:(UIApplication *)application
{
    [[SDKWrapper getInstance] applicationWillTerminate:application];
    delete app;
    app = nil;
}

// wechatOpenSdk implement
- (BOOL)application:(UIApplication *)application handleOpenURL:(NSURL *)url {
    return  [WXApi handleOpenURL:url delegate:self];
}
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
    BOOL isSuc = [WXApi handleOpenURL:url delegate:self];
    NSLog(@"url %@ isSuc %d",url,isSuc == YES ? 1 : 0);
    return  isSuc;
}
//接收微信返回结果
- (void) onResp:(BaseResp*)resp{
    if([resp isKindOfClass:[SendAuthResp class]])
    {
        SendAuthResp *aresp = (SendAuthResp *)resp;
        NSString *jsonResult = [NSString stringWithFormat:@"{\"code\":\"%@\",\"error\":%d}",aresp.code,aresp.errCode];
        [AppController callJsEngineCallBack:@"wxSdk.onAuth" :jsonResult];
    }
}
//调用js层方法
+ (void)callJsEngineCallBack:(NSString*) funcNameStr :(NSString*) contentStr
{
    NSLog(@"callJsEngineCallBack...");
    std::string funcName = [funcNameStr UTF8String];
    std::string param = [contentStr UTF8String];
    std::string jsCallStr = cocos2d::StringUtils::format("%s(`%s`);",funcName.c_str(), param.c_str());
    NSLog(@"jsCallStr = %s", jsCallStr.c_str());
    se::ScriptEngine::getInstance()->evalString(jsCallStr.c_str());
}
//发送微信登陆认证
+ (void)sendAuthRequest
{
    SendAuthReq* req =[[[SendAuthReq alloc ]init ] autorelease ];
    req.scope = @"snsapi_userinfo";
    req.state = @"none" ;
    [WXApi sendReq:req];
    NSLog(@"微信登录 weixin login");
}
//发送微信分享
+ (void)WxShareUrl:(NSString*) url :(NSString*) title :(NSString*) description :(int) scene :(NSString*) thumbData
{
    WXWebpageObject *webpageObject = [WXWebpageObject object];
    webpageObject.webpageUrl = url;
    WXMediaMessage *message = [WXMediaMessage message];
    message.title = title;
    message.description = description;
    [message setThumbData:[[NSData alloc] initWithBase64EncodedString:thumbData options:0]];
    message.mediaObject = webpageObject;
    SendMessageToWXReq *req = [[SendMessageToWXReq alloc] init];
    req.bText = NO;
    req.message = message;
    req.scene = scene;
    [WXApi sendReq:req];
}

//麦克风权限
+ (BOOL)checkMic{
    AVAuthorizationStatus microPhoneStatus = [AVCaptureDevice authorizationStatusForMediaType:AVMediaTypeAudio];
      switch (microPhoneStatus) {
          case AVAuthorizationStatusDenied:
          case AVAuthorizationStatusRestricted:
          {
              // 被拒绝
              [self goMicroPhoneSet];
              return false;
          }
              break;
          case AVAuthorizationStatusNotDetermined:
          {
              [self requestMicroPhoneAuth];
              return false;
          }
              break;
          case AVAuthorizationStatusAuthorized:
          {
              // 有授权
              return true;
          }
              break;
          default:
          {
              return false;
          }
              break;
      }
}
+ (void) requestMicroPhoneAuth
{
    [AVCaptureDevice requestAccessForMediaType:AVMediaTypeAudio completionHandler:^(BOOL granted) {}];
}
+(void) goMicroPhoneSet
{
    UIAlertController * alert = [UIAlertController alertControllerWithTitle:@"您还没有允许麦克风权限" message:@"去设置一下吧" preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction * cancelAction = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {}];
    UIAlertAction * setAction = [UIAlertAction actionWithTitle:@"去设置" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        dispatch_async(dispatch_get_main_queue(), ^{
            NSURL * url = [NSURL URLWithString:UIApplicationOpenSettingsURLString];
            [UIApplication.sharedApplication openURL:url options:nil completionHandler:^(BOOL success) {}];
        });
    }];
    [alert addAction:cancelAction];
    [alert addAction:setAction];
    [self presentViewController:alert animated:YES completion:nil];
}

AVAudioRecorder *_recorder = nullptr;
NSString *recorderFileStr = @"game.wav";
NSString *recorderFileAmrStr = @"game.amr";
BOOL isRecording = false;
//录音开始
+ (void)recordBegin
{
    if([self checkMic] == false) return;
    if(!isRecording) {
        isRecording = true;
        
        if(_recorder) {
            [_recorder release];
            _recorder = nullptr;
        };
        
        AVAudioSession *session = [AVAudioSession sharedInstance];
        [session setCategory:AVAudioSessionCategoryPlayAndRecord withOptions:AVAudioSessionCategoryOptionDefaultToSpeaker error:nil];
        [session setActive:YES error:nil];
        
        NSDictionary *recordSetting = [[NSDictionary alloc] initWithObjectsAndKeys:
                                       [NSNumber numberWithFloat: 8000.0],AVSampleRateKey, //采样率
                                       [NSNumber numberWithInt: kAudioFormatLinearPCM],AVFormatIDKey,
                                       [NSNumber numberWithInt:16],AVLinearPCMBitDepthKey,//采样位数 默认 16
                                       [NSNumber numberWithInt: 1], AVNumberOfChannelsKey,//通道的数目
                                       nil
                                       ];
        
        //获取沙盒根目录
        NSString *homePath = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) lastObject];
        NSString *filePath =  [homePath stringByAppendingPathComponent:recorderFileStr];
        NSURL *url = [NSURL fileURLWithPath:filePath];
        NSError *error = nil;
        _recorder = [[AVAudioRecorder alloc] initWithURL:url settings:recordSetting error:&error];
        _recorder.meteringEnabled = YES;
        [_recorder record];
    }
}
//录音取消
+ (void)recordCancel
{
    if(isRecording){
        isRecording = false;
        [_recorder stop];
        [_recorder deleteRecording];
    }
}
//录音结束
+ (void)recordDone
{
    if(isRecording){
        isRecording = false;
        [_recorder stop];
        NSString* homePath = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) lastObject];
        NSString* filePathWav = [homePath stringByAppendingPathComponent:recorderFileStr];
        NSString* filePathAmr = [homePath stringByAppendingPathComponent:recorderFileAmrStr];
        [VoiceConvert ConvertWavToAmr:filePathWav amrSavePath:filePathAmr];
        NSData* data = [NSData dataWithContentsOfFile:filePathAmr];
        data = [data base64EncodedDataWithOptions:0];
        NSString* dataStr = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];
        NSLog(@"%@", dataStr);
        [self callJsEngineCallBack:@"recorder.onRecordDone" :dataStr];
        [_recorder deleteRecording];
    }
}

+ (void)aliPay:(NSString*) orderString
{
    // NOTE: 调用支付结果开始支付
    [[AlipaySDK defaultService] payOrder:orderString fromScheme:@"aliSdk" callback:^(NSDictionary *resultDic) {
        NSLog(@"reslut = %@",resultDic);
    }];
}

+ (void)captcha
{
    NTESVerifyCodeManager* manager =  [NTESVerifyCodeManager sharedInstance];
    if (manager) {
        // 如果需要了解组件的执行情况,则实现回调
        manager.delegate = (id<NTESVerifyCodeManagerDelegate>)self;
        NSString *captchaid = @"a896c747476a4a9ab302d4071a3599f8";
        manager.mode = NTESVerifyCodeNormal;
        [manager configureVerifyCode:captchaid timeout:7.0];
        // 显示验证码
        [manager openVerifyCodeView:nil];
    }
}

+ (void)destroyCaptcha
{
    
}

#pragma mark - NTESVerifyCodeManagerDelegate
/**
 * 验证码组件初始化完成
 */
- (void)verifyCodeInitFinish{
    NSLog(@"收到初始化完成的回调");
}

/**
 * 验证码组件初始化出错
 *
 * @param message 错误信息
 */
- (void)verifyCodeInitFailed:(NSString *)message{
    NSLog(@"收到初始化失败的回调:%@",message);
}

/**
 * 完成验证之后的回调
 *
 * @param result 验证结果 BOOL:YES/NO
 * @param validate 二次校验数据，如果验证结果为false，validate返回空
 * @param message 结果描述信息
 *
 */
+ (void)verifyCodeValidateFinish:(BOOL)result validate:(NSString *)validate message:(NSString *)message{
    if(result == true) {
        [self callJsEngineCallBack:@"captchaSdk.onResult" :@"1"];
    } else {
        [self callJsEngineCallBack:@"captchaSdk.onResult" :@"0"];
    }
}

/**
 * 关闭验证码窗口后的回调
 */
+ (void)verifyCodeCloseWindow{
    //用户关闭验证后执行的方法
    NSLog(@"收到关闭验证码视图的回调");
    [self callJsEngineCallBack:@"captchaSdk.onResult" :@"-1"];
}

+ (NSString*)deviceModelName
{
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString *deviceModel = [NSString stringWithCString:systemInfo.machine encoding:NSUTF8StringEncoding];
    return deviceModel;
}

//取广告标识符
+ (NSString*)getIDFA
{
    __block NSString* idfa = nil;
    if (@available(iOS 14, *)){
        [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
            if (status == ATTrackingManagerAuthorizationStatusAuthorized){
                idfa = [[ASIdentifierManager sharedManager].advertisingIdentifier UUIDString];
            } else {
                idfa = [[ASIdentifierManager sharedManager].advertisingIdentifier UUIDString];
            }
        }];
    } else
    {
        idfa = [[ASIdentifierManager sharedManager].advertisingIdentifier UUIDString];
    }
    
    return idfa;
}

#pragma mark -
#pragma mark Memory management

- (void)applicationDidReceiveMemoryWarning:(UIApplication *)application {
    /*
     Free up as much memory as possible by purging cached data objects that can be recreated (or reloaded from disk) later.
     */
}

@end
