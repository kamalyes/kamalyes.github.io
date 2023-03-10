#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
# echo 'kamalyes.github.io' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:kamalyes/kamalyes.github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://kamalyes:${GITHUB_TOKEN}@github.com/kamalyes/kamalyes.github.io.git
  git config --global user.name "kamalyes"
  git config --global user.email "501893067@qq.com"
fi
git init
git remote add origin git@github.com:kamalyes/kamalyes.github.io.git
git branch -M master
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github


cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
