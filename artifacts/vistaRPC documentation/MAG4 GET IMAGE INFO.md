---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 GET IMAGE INFO 

 property | value 
--- | --- 
 label | MAG4 GET IMAGE INFO
 tag | GETINFO
 routine | [MAGGTU31](http://code.osehra.org/dox/Routine_MAGGTU31_source.html)
 return value type | ARRAY
 description | Returns specific fields of an image entry, to be displayedin the image information window.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 30 | true | Image File internal entry number. | 
| FLAGS | LITERAL |  | true | Flags that control the execution (can be combined):\D\  Deleted Image Information is relevant | 




 Generated on January 11th 2017, 7:15:04 am