---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG QUE IMAGE 

 property | value 
--- | --- 
 label | MAGG QUE IMAGE
 tag | QUEIMAGE
 routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
 return value type | SINGLE VALUE
 description | Queues images to be copied from JukeBox to harddrive. (to the Image Write Directory)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CODE | LITERAL | 5 | true | A Code containing A | F | B    if [ A  then Abstracts will be queued.   if [ F  then Full Resolution image will be queued   if [ B  then BIG file ( Xray 2k x 2k ) will be queued | 
| MAGIEN | LITERAL | 20 | true | This is the IEN from Image File ^MAG(2005  to be queued. | 




Generated on January 11th 2017, 6:34:23 am