---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET STUDY 

 property | value 
--- | --- 
 label | MAGV GET STUDY
 tag | GETSTUDY
 routine | [MAGVRS04](http://code.osehra.org/dox/Routine_MAGVRS04_source.html)
 return value type | ARRAY
 description | Returns study attributes given the IEN on the IMAGE STUDYFile (#2005.62).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STUDYIEN | LITERAL |  |  | The internal entry number of the study in the IMAGE STUDYFile (#2005.62). | 
| OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking. | 
| PROCIEN | LITERAL |  |  | The internal entry number of the related procedure in the IMAGE PROCEDUREREFERENCE file (#2005.61). | 




 ###### Generated on January 11th 2017, 6:39:43 am