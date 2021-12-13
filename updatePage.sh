# !bin/bash
echo '上传githubpages'

echo $1
git add -A
git commit -m "$1"
git pull
git push

echo '更新完毕'