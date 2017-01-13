---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS ACTIVE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS ACTIVE{:/}
 tag | {::nomarkdown}ACTIVE{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns listing of a patient's active inpatient and outpatientmedications.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | retrieve active inpatient & outpatient meds

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}VIEW{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}UPDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is use to determine if the parameter that stored the user view preference is updated. This should be set to 1 if called from CPRS and set to 0 if called from another application.{:/} | 




 Generated on January 13th 2017, 6:44:47 am