---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS33 COMPLOC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS33 COMPLOC{:/}
 tag | {::nomarkdown}COMPLOC{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will return a 0 if the patient location is the same location as the original order. It will return a 1 if the location is different.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the original order from file 100{:/} | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the encounter location the order is being written for.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | COMPLOC^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Input parameters | {::nomarkdown}ORID<br/>LOC{:/}
 Code | ```  S ORY=0
 I LOC'=+$P($G(^OR(100,+ORID,0)),U,10) S ORY=1```




 Generated on January 14th 2017, 7:26:36 am