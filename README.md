# Cytus1 to CTViewer

### Requirements

- tqdm

```
pip install tqdm
```

### 使用方法：

直接打开HTML文件将无法预览，我提供的方法是使用http.server来打开，具体使用方法如下：

1. 把Cytus1谱面文件放入cy1文件夹

2. 运行main.py

3. 于main.py所在目录以8089端口运行http.server，如果需要指定其他端口，需要同时在res/main.html和utils.py里面修改端口
```
python -m http.server 8089
```

4. 使用浏览器访问[http://127.0.0.1:8089/output_html/](http://127.0.0.1:8089/output_html/)并选择需要浏览的谱面

注意：一定要使用127.0.0.1而不能使用localhost登录

### 不足

无法生成小节线

### 用途

生成[CTVIEWER](http://ctviewer.laishin.net/charts)上没有的谱面图，比如Chapter L (New)

把CYTUS1官谱格式：
```
VERSION 2
BPM xxx (实际bpm*2)
PAGE_SHIFT xxx (谱面偏移)
PAGE_SIZE xxx (单页长度，单位为s)
NOTE 0 XXXX XXXX XXXX （时间坐标 x坐标 hold长度，0则为普通note或锁链）
...
NOTE n XXXX XXXX XXXX

LINK A B C（定义锁链的各个节点）
...
LINK X Y Z
```
转化为[CTVIEWER](http://ctviewer.laishin.net/charts)可以识别的JSON格式，比如[这样](http://ctviewer.laishin.net/assets/freedom_dive_hidden_hard-41da874e1f78708620af7128c1e680fc.json)，并且生成html文件以供浏览

