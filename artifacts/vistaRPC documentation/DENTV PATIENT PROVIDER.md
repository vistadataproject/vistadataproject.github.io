---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV PATIENT PROVIDER 

 property | value 
--- | --- 
 label | DENTV PATIENT PROVIDER
 tag | PP
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | SINGLE VALUE
 description | Sets and kills the ^XTMP(\DENTVPT\,DFN,DUZ) global to keep track ofwhich provider(s) are accessing which patients.  Users are warnedif another provider is accessing the same patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 30 | true | Contains the patient DFN | 
| FLAG | LITERAL | 1 | true | 1=SET (set the index) 2=KILL (kill off current pt/prov index) | 




 ###### Generated on January 11th 2017, 6:39:43 am