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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILEIEN | LITERAL |  |  | The IEN of the IMAGE INSTANCE FILE (#2005.65) entry to be retrieved. | 
| SOPIEN | LITERAL |  |  | The IEN of the parent IMAGE SOP INSTANCE file (#2005.64) entry. | 
| OVERRIDE | LITERAL |  |  | If the OVERRIDE flag is set to 1 the RPC will not check the validity of thePARENT IEN. | 




 ###### Generated on January 11th 2017, 6:39:43 am