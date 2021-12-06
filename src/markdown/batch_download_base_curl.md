curl和shell脚本实现批量下载图片
======

vscode批量选择快捷键：

Mac : ⌘ command + ⇧ shift + L
Windows : ⇧ shift + ⌃ ctrl + L

新建.sh的脚本
使用 bash [name].sh执行

curl的下载命令为
```txt
curl -O https://www.baidu.com/images/moon.png
```
将需要下载的链接粘贴到sh中，并使用vscode多行编辑工具，给链接首部添加curl -O
```shell
# !bin/bash
curl -O https://player.jdcloud-elive.com/fission/resources/image/shareimg1.png
curl -O https://player.jdcloud-elive.com/fission/resources/image/shareimg1.png
curl -O https://player.jdcloud-elive.com/fission/resources/image/shareimg_hd.png
curl -O https://player.jdcloud-elive.com/fission/resources/image/shareimg_hd.png
curl -O https://player.jdcloud-elive.com/fission/resources/image/shareimg_hd.png
```

执行bash [name].sh即可将图片下载当前文件夹

如果链接带括号，需要使用引号包起来
```
curl -O 'https://player.jdcloud-elive.com/fission/resources/image/shop-icon(3x).png'
```