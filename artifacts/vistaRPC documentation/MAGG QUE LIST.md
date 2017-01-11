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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CODE | LITERAL | 5 | true |   A Code containing A | F | B     if [ A  then Abstracts will be queued.     if [ F  then Full Resolution image will be queued.     if [ B  then BIG file ( Xray 2k x 2k ) will be queued. | 
| LIST | LIST |  | true | The list of Image IEN's to be queued. | 




Generated on January 11th 2017, 6:34:23 am