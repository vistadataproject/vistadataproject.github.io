---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV INPATIENT BEDSECTION 

 property | value 
--- | --- 
 label | DENTV INPATIENT BEDSECTION
 tag | INP
 routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
 return value type | SINGLE VALUE
 description | This will return a string indicating whether or not the patient is a current inpatient.  If an inpatient, then also return, if possible, the PTF Specialty and Dental Bedsection associated with the current ward that the patient is lodged.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 15 | true | This is a pointer to the PATIENT file. | 




 ###### Generated on January 11th 2017, 6:39:43 am