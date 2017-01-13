---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV RAD STAT EXAMINED 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV RAD STAT EXAMINED{:/}
 tag | {::nomarkdown}XMEXAMIN{:/}
 routine | [MAGVIM05](http://code.osehra.org/dox/Routine_MAGVIM05_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Wraps calls to RAMAG EXAMINED RPC and re-formats output.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RADPT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the Patient in the RAD/NUC MED PATIENT file (#70).{:/} | 
| {::nomarkdown}RAEXAM1{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the REGISTERED EXAMS multiple (sub file #70.02).{:/} | 
| {::nomarkdown}RAEXAM2{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN in the EXAMINATIONS multiple (sub-file #70.03).{:/} | 
| {::nomarkdown}MAGVUSRDV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}User Logon Division of the person logged into the Importer II application.{:/} | 
| {::nomarkdown}RAIMGTYP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the radiology imaging type parameter{:/} | 
| {::nomarkdown}MAGVUSR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DUZ of the person logged into the Importer II application.{:/} | 




 Generated on January 13th 2017, 5:52:13 am