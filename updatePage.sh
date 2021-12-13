# !bin/bash
echo '上传githubpages'

message=${1:-"更新github-pages"} 
# message = $1 || "更新github-pages"

echo $message
git add -A
git commit -m $message
git pull
git push

echo '更新完毕'