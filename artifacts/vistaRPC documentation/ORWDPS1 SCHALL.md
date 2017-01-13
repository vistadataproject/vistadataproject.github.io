---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 SCHALL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 SCHALL{:/}
 tag | {::nomarkdown}SCHALL{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return all schedules
 Input Parameters | {::nomarkdown}DFN<br/>LOCIEN{:/}
 Lines | ```
 N CNT,ILST,ORARRAY,WIEN
 S WIEN=$$WARDIEN^ORWDPS32(+$G(LOCIEN))
 D SCHED^PSS51P1(WIEN,.ORARRAY)
 S ILST=0
 S CNT=0 F  S CNT=$O(ORARRAY(CNT)) Q:CNT'>0  D
 .S ILST=ILST+1,LST(ILST)=$P(ORARRAY(CNT),U,2,5)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 
| {::nomarkdown}LOCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the inpatient location IEN from file 44, if a location is not defined for the patient the value will be zero.{:/} | 




 Generated on January 13th 2017, 6:55:29 am