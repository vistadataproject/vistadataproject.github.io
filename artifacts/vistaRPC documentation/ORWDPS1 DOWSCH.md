---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 DOWSCH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 DOWSCH{:/}
 tag | {::nomarkdown}DOWSCH{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of schedule that have a frequency defined and the frequency is less then or equal to 1440 minutes{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return all schedules
 Input Parameters | {::nomarkdown}DFN<br/>LOCIEN{:/}
 Lines | ```
 N CNT,FREQ,ILST,ORARRAY,WIEN
 S WIEN=$$WARDIEN^ORWDPS32(+$G(LOCIEN))
 D SCHED^PSS51P1(WIEN,.ORARRAY)
 S ILST=0
 S CNT=0 F  S CNT=$O(ORARRAY(CNT)) Q:CNT'>0  D
 .S NODE=$G(ORARRAY(CNT))
 .I $P(NODE,U,4)="C" D
 ..K ^TMP($J,"ORWDPS1 DOWSCH")
 ..D ZERO^PSS51P1($P(NODE,U),,,,"ORWDPS1 DOWSCH")
 ..S FREQ=$G(^TMP($J,"ORWDPS1 DOWSCH",$P(NODE,U),2))
 ..K ^TMP($J,"ORWDPS1 DOWSCH")
 ..I +FREQ=0 Q
 ..I +FREQ>1440 Q
 ..S ILST=ILST+1,LST(ILST)=$P(ORARRAY(CNT),U,2,5)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}LOCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Location IEN from file 44{:/} | 




 Generated on January 13th 2017, 6:55:29 am