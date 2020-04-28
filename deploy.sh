###
 # @Author: 库建华
 # @Date: 2020-03-30 23:08:55
 # @LastEditors: 库建华
 # @LastEditTime: 2020-03-30 23:22:23
 # @Version: 1
 # @Description:
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build docs

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f https://github.com/kujianhua/my_note.git master:gh-pages

cd -

git add -A
git commit -m '天天向上'
git status
git push