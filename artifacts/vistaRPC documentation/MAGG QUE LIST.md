---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG QUE LIST 

 property | value 
--- | --- 
 label | MAGG QUE LIST
 tag | QUELIST
 routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
 return value type | SINGLE VALUE
 description | Queues a list of images to be copied from jukebox to harddrive. 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CODE | LITERAL | 5 | true |   A Code containing A | F | B     if [ A  then Abstracts will be queued.     if [ F  then Full Resolution image will be queued.     if [ B  then BIG file ( Xray 2k x 2k ) will be queued. | 
| vs:Input_Parameter-8994_02 | LIST | LIST |  | true | The list of Image IEN's to be queued. | 