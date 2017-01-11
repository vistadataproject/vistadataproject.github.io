---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB EXAMPLE GET LIST 

 property | value 
--- | --- 
 label | XWB EXAMPLE GET LIST
 tag | GETLIST
 routine | [XWBEXMPL](http://code.osehra.org/dox/Routine_XWBEXMPL_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC brings back a list of elements to the client.  The user can requesteither a number of lines or a number of Kilobytes of data to be returned.This RPC exists support of RPC Broker Example program.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ITEMS | LITERAL |  | true | This parameter can be only one of two values:  LINES     - RPC will return a number of lines  KILOBYTES - RPC will return a number of kilobytes of data | 
| QUANTITY | LITERAL |  |  | Either a number of lines or a number of kilobytes to send back. | 




 ###### Generated on January 11th 2017, 6:39:42 am