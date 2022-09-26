# ios-apps
ios apps develop

### 项目宗旨
* 该项目旨在方便ios测试包分发
* 可替代类似蒲公英的分发平台，我的分发我做主

### 使用方法
访问网站：
https://cop-dev.github.io/ios-apps

![image](https://cop-dev.github.io/ios-apps/qrcode.png)

### 开发者使用方法
1. clone项目
2. 修改项目中的xlsx文件，如需添加则填写以下内容
    * app名称
    * bundle id
    * app版本号
    * app build
    * ipa下载路径
3. git仓库提交，等待几分钟后即可

### 原理
每次代码提交main分支，可触发github任务，
读取xlsx文件并根据内容生成可供ios安装
使用的plist文件和相应的schema超链接。

