## 更新日志

### 2024-11-20

1. 登录逻辑完成，token验证通过，可以进行正常的业务操作。

2. 默认用户名字 : 密码： admin : admin123

3. 子应用的配置在src/qiankun/config.js中，可以根据实际情况进行修改。

4. 拉取分支（dev）代码, 提交代码，不要往主分支上合并。如果代码commit报错，请使用npm run commit进行提交。具体提交规范请参考 https://cz-git.qbb.sh/zh/config/#%E4%B8%AD%E8%8B%B1%E6%96%87%E5%AF%B9%E7%85%A7%E6%A8%A1%E6%9D%BF

5. 记得在src/qiankun/config.js中子应用的name和activeRule改了，子应用的本身要做好相应修改。建议子应用的name和activeRule根据示例修改，不要使用中文。
