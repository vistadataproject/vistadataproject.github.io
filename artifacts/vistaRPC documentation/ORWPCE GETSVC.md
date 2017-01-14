---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE GETSVC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GETSVC{:/}
 tag | {::nomarkdown}GETSVC{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Calculates the correct service category.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SVC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Initial Service Connection Category.{:/} | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Pointer to the hospital location.{:/} | 
| {::nomarkdown}INP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Patient Status0 = Outpatient1 = Inpatient{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETSVC^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | Returns the correct Service Connected Category
 Input parameters | {::nomarkdown}SVC<br/>LOC<br/>INP{:/}
 Code | ```  N DSS,ORWSVC
 S DSS=$P($G(^SC(+LOC,0)),U,7)
 Q:'+DSS
 M ORWSVC=SVC
 S NEWSVC=$$SVC^PXKCO(.ORWSVC,DSS,INP,LOC) ; DBIA #3225```




 Generated on January 14th 2017, 7:26:35 am