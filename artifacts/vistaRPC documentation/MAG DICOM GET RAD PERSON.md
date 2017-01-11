---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD PERSON 

 property | value 
--- | --- 
 label | MAG DICOM GET RAD PERSON
 tag | RADLST
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | ARRAY
 description | Returns list of names from the NEW PERSON file (#200) with a Rad/Nuc class.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLASS | LITERAL | 30 | true | This is the RAD/NUC classification used to correlate matching entries.Input value: T (technologist), R (resident), S (staff), or C (clerk).  | 
| NAME | LITERAL | 30 | true | This is the name to be used in the lookup process. | 




 ###### Generated on January 11th 2017, 6:39:43 am