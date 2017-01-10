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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 30 | true | Image File internal entry number. | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL |  | true | Flags that control the execution (can be combined):\D\  Deleted Image Information is relevant | 