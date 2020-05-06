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