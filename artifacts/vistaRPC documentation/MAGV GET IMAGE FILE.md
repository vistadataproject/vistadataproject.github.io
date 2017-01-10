---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET IMAGE FILE 

 property | value 
--- | --- 
 label | MAGV GET IMAGE FILE
 tag | GETFILE
 routine | [MAGVRS31](http://code.osehra.org/dox/Routine_MAGVRS31_source.html)
 return value type | ARRAY
 description | Returns image attributes given the IEN of the IMAGE INSTANCE FILE (#2005.65).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILEIEN | LITERAL |  |  | The IEN of the IMAGE INSTANCE FILE (#2005.65) entry to be retrieved. | 
| vs:Input_Parameter-8994_02 | SOPIEN | LITERAL |  |  | The IEN of the parent IMAGE SOP INSTANCE file (#2005.64) entry. | 
| vs:Input_Parameter-8994_02 | OVERRIDE | LITERAL |  |  | If the OVERRIDE flag is set to 1 the RPC will not check the validity of thePARENT IEN. | 