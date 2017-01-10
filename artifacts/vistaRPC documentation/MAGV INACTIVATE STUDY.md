---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE STUDY 

 property | value 
--- | --- 
 label | MAGV INACTIVATE STUDY
 tag | INSTUDY
 routine | [MAGVRS04](http://code.osehra.org/dox/Routine_MAGVRS04_source.html)
 return value type | ARRAY
 description | This RPC inactivates a study entry in the IMAGE STUDY file (#2005.62).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | STUDYIEN | LITERAL |  |  | The IEN of the study entry to be inactivated. | 
| vs:Input_Parameter-8994_02 | PROCIEN | LITERAL |  |  | The IEN of the related procedure reference. | 
| vs:Input_Parameter-8994_02 | OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation. | 