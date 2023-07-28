declare let REMOTE_SERVER_ROOT: string;       //远程资源服务器地址
declare let REMOTE_BUNDLE_MANIFEST: string;   //远程版本文件


declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;