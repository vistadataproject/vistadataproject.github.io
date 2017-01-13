---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GETSVC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GETSVC{:/}
 tag | {::nomarkdown}GETSVC{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Calculates the correct service category.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns the correct Service Connected Category
 Input Parameters | {::nomarkdown}SVC<br/>LOC<br/>INP{:/}
 Lines | ```
 N DSS,ORWSVC
 S DSS=$P($G(^SC(+LOC,0)),U,7)
 Q:'+DSS
 M ORWSVC=SVC
 S NEWSVC=$$SVC^PXKCO(.ORWSVC,DSS,INP,LOC) ; DBIA #3225```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SVC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Initial Service Connection Category.{:/} | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Pointer to the hospital location.{:/} | 
| {::nomarkdown}INP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Patient Status0 = Outpatient1 = Inpatient{:/} | 




 Generated on January 13th 2017, 6:55:29 am