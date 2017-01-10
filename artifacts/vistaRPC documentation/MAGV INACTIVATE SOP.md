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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SOPIEN | LITERAL |  |  | The IEN of the SOP entry to be inactivated. | 
| vs:Input_Parameter-8994_02 | SERIEN | LITERAL |  |  | The IEN of the related series IEN. | 
| vs:Input_Parameter-8994_02 | OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation. | 