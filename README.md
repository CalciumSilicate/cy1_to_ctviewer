# cy1_to_ctviewer

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
转化为[CTVIEWER](http://ctviewer.laishin.net/charts)可以识别的JSON格式
