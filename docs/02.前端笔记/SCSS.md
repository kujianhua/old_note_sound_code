# scss

```scss

<style lang="scss" scoped>
@import '@/styles/reset.scss'; //引入外部文件
$color: #dcdfe6; //定义变量‘$’开头
$margin: top;
@mixin br5 { //设置混合 写公共部分，减少重复样式代码
  border-radius: 5px;
}
@mixin br22($mar: 20) { //混合 可传参
  border-radius: 22px;
  margin-#{$margin}: double($mar) + px; //变量可用在属性名上
}
@function double($params) { //@function @return 对应方法，支持传参，没有前后位置限制
  @return $params * 2;
}
.common {
  padding: 20px;
}

//编译后为：extend过本代码块的class名会被放在这里，多个extend就会放多个
//代码块的位置不会变化，所以存在代码先后，导致上面的样式被下面覆盖
%mm { //定义样式代码块，提供给其他extend，
  display: inline-block;
}
.programName {
  @include br5; //引入@mixin定义的代码块
  padding: 0px 9px;
  border: 1px $color dashed;
  min-width: 170px;
  height: 26px;
  display: inline-block;
  // @extend %mm;
}
.create-cant-program-model {
  @include br22(13);
  @include br5;
  @extend .common; //继承其他class代码块
  @extend %m; //继承%定义的代码块
  // @extend %mm;
  border: 1px $color solid;
  margin-#{$margin}: 20px;
  position: relative;
}
%m {//代码块位置不会变化
  display: block;
}
</style>

```