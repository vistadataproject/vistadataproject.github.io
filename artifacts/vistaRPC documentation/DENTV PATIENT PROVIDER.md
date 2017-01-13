---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV PATIENT PROVIDER 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV PATIENT PROVIDER{:/}
 tag | {::nomarkdown}PP{:/}
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets and kills the ^XTMP(\DENTVPT\,DFN,DUZ) global to keep track ofwhich provider(s) are accessing which patients.  Users are warnedif another provider is accessing the same patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the patient DFN{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}1=SET (set the index) 2=KILL (kill off current pt/prov index){:/} | 




 Generated on January 13th 2017, 6:24:32 am