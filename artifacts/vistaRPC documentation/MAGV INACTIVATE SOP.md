---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE SOP 

 property | value 
--- | --- 
 label | MAGV INACTIVATE SOP
 tag | INSOP
 routine | [MAGVRS24](http://code.osehra.org/dox/Routine_MAGVRS24_source.html)
 return value type | ARRAY
 description | This RPC inactivates a SOP INSTANCE entry in the IMAGE SOP INSTANCE file (#2005.64).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SOPIEN | LITERAL |  |  | The IEN of the SOP entry to be inactivated. | 
| SERIEN | LITERAL |  |  | The IEN of the related series IEN. | 
| OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation. | 




 ###### Generated on January 11th 2017, 6:39:43 am