---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV INPATIENT BEDSECTION 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV INPATIENT BEDSECTION{:/}
 tag | {::nomarkdown}INP{:/}
 routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return a string indicating whether or not the patient is a current inpatient.  If an inpatient, then also return, if possible, the PTF Specialty and Dental Bedsection associated with the current ward that the patient is lodged.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the PATIENT file.{:/} | 




 Generated on January 13th 2017, 6:15:57 am