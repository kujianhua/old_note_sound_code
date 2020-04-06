# Vuepress 学习笔记

## 插件

### 自动生成侧边栏[（boboidream/vuepress-bar）](https://github.com/boboidream/vuepress-bar)

#### 安装 `npm install -D boboidream/vuepress-bar`

#### 规则

>+ nav 开头的文件夹将会成为导航栏，如果手动配置了 themeConfig.nav 将自动合并。
>+ 非 nav 开头文件夹会成为 Group
>+ 文件夹 01.guide--nc 以 --nc 结尾意为设置 Group 默认展开。
>+ 文件夹 01.guide--d2 以 --d数字 结尾，为设置目录深度。
>+ 会自动去掉前缀、排序数字

#### 配置

位置：

> `.vuepress/config.js`
or
`.vuepress/theme/index.js`

代码：

```javascript
module.exports = {
  plugins: ['autobar']
}
```

#### 坑

> 1. nav开头的文件夹，是会被安排到导航栏，但是点击无法访问到内容，表现：url对不上，手动修改url使其对上，无效。（在无任何配置的情况下）
>> 解决办法:暂无
>
> 2. 配置问题
