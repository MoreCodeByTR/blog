# !bin/bash
echo '上传githubpages'

git add -A
git commit -m"更新github-pages"
git pull
git push

echo '更新完毕'