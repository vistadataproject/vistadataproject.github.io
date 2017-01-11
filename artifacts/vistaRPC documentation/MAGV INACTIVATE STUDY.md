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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STUDYIEN | LITERAL |  |  | The IEN of the study entry to be inactivated. | 
| PROCIEN | LITERAL |  |  | The IEN of the related procedure reference. | 
| OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation. | 




 Generated on January 11th 2017, 7:15:04 am