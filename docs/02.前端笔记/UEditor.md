# UEditor

## vue项目

### vue-ueditor-wrap[[github]](https://github.com/HaoChuan9421/vue-ueditor-wrap)

::: danger error
Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed
:::
解决方案
>找到 ```ueditor.all.min.js```文件中如下代码

>
> editor.addListener('ready',function **ED**(){
> //在这里给函数命名
>
> ...
>
> domUtils.un(editor.document, "click", ~~arguments.callee~~ **ED**);
>
> //在这里调用命名的函数,因为es5已经不再支持，通过arguments.callee来调用自函数；
>
> }
>
> ...
>
> })


::: danger error
在点击标题
Uncaught ReferenceError: pN is not defined
:::
解决方案
>找到 ```ueditor.all.min.js```文件中如下代码

>搜索pN,然后在if()判断前添加变量声明：```var pN;```
>这个不解决掉基本不会有影响，只是有报错

::: danger error
在点击标题
Uncaught ReferenceError: ut is not defined
:::
解决方案
>找到 ```ueditor.all.min.js```文件中如下代码

>搜索ut,然后在```ut=Y(b)```前添加变量声明：```var ut;```
>这个解决后，意外解决了单元格的选择问题；不解决，无法拖动选择多个单元格

### 锚点 anchor

在富文本中添加锚点，a标签里没有name属性；

原因：锚点是img标签与a标签互换得来的，img标签里的anchorname属性，转换成a标签里的name属性；

但是，```ueditor.config.js```里有配置默认的标签可用属性，这两者都没有配置对应属性；

解决方案：在配置文件里，的`whitList：`里面添加对应标签的相应属性白名单

### 配置问题

vue的\<vue-ueditor-wrap\>节点，的`config`属性，需要配置好`UEDITOR_HOME_URL`,默认为**static/UEditor/**,因为我们文件名为static/UE,所以导致，一直那不到一些插件的文件，文件路径都对不上，拿个鬼勒~

### 字数限制

原定字数限制为转换前字数（即为用户输入明文字符数）；
更新
```javascript
 var count = editor.getContentLength(false);//源码为true,修改为false即可
```
可将期设定为转换后字符数，方便后端做字符限制；

### 字数限制 升级版

实现控制转换后字符数；
展示：`当前明文 4 个字符，当前转后 11 个字符，还剩余9989 个字符`

`ueditor.config.js`
```
        ,wordCountMsg:'当前明文 {#sound_count} 个字符，当前转后 {#count} 个字符，还剩余{#leave} 个字符'   //当前已输入 {#count} 个字符，您还可以输入{#leave} 个字符

```

`ueditor.all.js`围绕**getContentLength()**方法，的修改
```javascript
 var {count,sound_count} = editor.getContentLength();
                if (count > max) {
                    countDom.innerHTML = errMsg;
                    editor.fireEvent("wordcountoverflow");
                } else {
                    countDom.innerHTML = msg.replace("{#leave}", max - count).replace("{#count}", count).replace("{#sound_count}",sound_count);
                }
...
getContentLength: function () {
            var count = this.getContent(false,false,true).length;
            var sound_count = this.getContentTxt().replace(/[\t\r\n]+/g, '').length;
            return {count, sound_count};
        },
```

### 本地保存成功

组件会定期提示**本地保存成功**

修改外码如下
```javascript
  ...
 'contentchange': function () {
                //解决本地保存提示
                if (!me.getOpt('enableAutoSave')) {
                    return;
                }
                //解决本地保存提示 end

                if ( !saveKey ) {
                    return;
                }

                if ( me._saveFlag ) {
                    window.clearTimeout( me._saveFlag );
                }
  ...
```

## 图片直传OSS

