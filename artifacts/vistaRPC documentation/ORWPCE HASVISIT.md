---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE HASVISIT 

 property | value 
--- | --- 
 label | ORWPCE HASVISIT
 tag | HASVISIT
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | SINGLE VALUE
 description | Returns the visit status of the visit associated with a note:1 if the visit is being pointed to by an appointment0 if the visit is NOT being pointed to by an appointment-1 if the visit is invalid or could not be determined


### Method description

 property | value 
--- | --- 
 Method comment | Has visit or is stand alone

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL |  |  | IEN of the Note. | 
| DFN | LITERAL |  |  | Patient DFN. | 
| ORLOC | LITERAL |  |  | Hospital Location. | 
| ORDTE | LITERAL |  |  | Visit Date | 




 ###### Generated on January 11th 2017, 6:39:42 am