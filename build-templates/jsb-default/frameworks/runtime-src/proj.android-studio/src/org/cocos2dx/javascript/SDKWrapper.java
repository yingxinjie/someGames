package org.cocos2dx.javascript;

import android.content.Context;
import android.content.Intent;
import android.content.res.AssetManager;
import android.content.res.Configuration;
import android.opengl.GLSurfaceView;
import android.os.Bundle;
import android.util.Log;

import org.cocos2dx.javascript.service.SDKClass;
import org.json.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class SDKWrapper {
    private Context mainActive = null;
    private static SDKWrapper mInstance = null;
    private List<SDKClass> sdkClasses;

    public static SDKWrapper getInstance() {
        if (null == mInstance) {
            mInstance = new SDKWrapper();
        }
        return mInstance;
    }

    public void init(Context context) {
        this.mainActive = context;
        for (SDKClass sdk : this.sdkClasses) {
            sdk.init(context);
        }
    }

    public Context getContext() {
        return this.mainActive;
    }

//    public void loadSDKClass() {
//        ArrayList<SDKClass> classes = new ArrayList<>();
//        try {
//            String json = this.getJson(this.mainActive);
//            Log.i("out111111111111111111", json);
//            JSONObject jsonObject = new JSONObject(json);
//            JSONArray serviceClassPath = jsonObject.getJSONArray("serviceClassPath");
//            int length = serviceClassPath.length();
//            for (int i = 0; i < length; i++) {
//                String classPath = serviceClassPath.getString(i);
//                SDKClass sdk = (SDKClass) Class.forName(classPath).newInstance();
//                classes.add(sdk);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        this.sdkClasses = classes;
//    }

    public void loadSDKClass() {
        ArrayList classes = new ArrayList();
        this.sdkClasses = classes;
        try {
            String json = this.getJson(this.mainActive,"project.json");
            JSONObject jsonObject = new JSONObject(json);
            JSONArray serviceClassPath = jsonObject.optJSONArray("serviceClassPath");
            if (serviceClassPath == null) return;
            int length = serviceClassPath.length();
            for (int i = 0; i < length; i++) {
                String classPath = serviceClassPath.getString(i);
                SDKClass sdk = (SDKClass) Class.forName(classPath).newInstance();
                classes.add(sdk);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        this.sdkClasses = classes;
    }

    private String getJson(Context mContext) {
        StringBuilder sb = new StringBuilder();
        AssetManager am = mContext.getAssets();
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(am.open("project.json")));
            String next;
            while (null != (next = br.readLine())) {
                sb.append(next);
            }
        } catch (IOException e) {
            e.printStackTrace();
            sb.delete(0, sb.length());
        }
        return sb.toString().trim();
    }

    public void setGLSurfaceView(GLSurfaceView view, Context context) {
        this.mainActive = context;
        this.loadSDKClass();
        for (SDKClass sdk : this.sdkClasses) {
            sdk.setGLSurfaceView(view);
        }
    }

    public void onResume() {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onResume();
        }
    }

    public void onPause() {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onPause();
        }
    }

    public void onDestroy() {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onDestroy();
        }
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onActivityResult(requestCode, resultCode, data);
        }
    }

    public void onNewIntent(Intent intent) {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onNewIntent(intent);
        }
    }

    public void onRestart() {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onRestart();
        }
    }

    public void onStop() {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onStop();
        }
    }

    public void onBackPressed() {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onBackPressed();
        }
    }

    public void onConfigurationChanged(Configuration newConfig) {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onConfigurationChanged(newConfig);
        }
    }

    public void onRestoreInstanceState(Bundle savedInstanceState) {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onRestoreInstanceState(savedInstanceState);
        }
    }

    public void onSaveInstanceState(Bundle outState) {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onSaveInstanceState(outState);
        }
    }

    public void onStart() {
        for (SDKClass sdk : this.sdkClasses) {
            sdk.onStart();
        }
    }
}
