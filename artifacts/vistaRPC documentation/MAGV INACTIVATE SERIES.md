---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE SERIES 

 property | value 
--- | --- 
 label | MAGV INACTIVATE SERIES
 tag | INSERIES
 routine | [MAGVRS14](http://code.osehra.org/dox/Routine_MAGVRS14_source.html)
 return value type | ARRAY
 description | This RPC inactivates a series entry in the IMAGE SERIES file (#2005.63).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SERIEN | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation. | 
| vs:Input_Parameter-8994_02 | STUDYIEN | LITERAL |  |  | The IEN of the related study entry. | 
| vs:Input_Parameter-8994_02 | OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation. | 