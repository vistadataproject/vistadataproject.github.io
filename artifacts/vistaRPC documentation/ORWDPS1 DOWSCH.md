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
 Lines | ```{::nomarkdown} N CNT,FREQ,ILST,ORARRAY,WIEN<br/> S WIEN=$$WARDIEN^ORWDPS32(+$G(LOCIEN))<br/> D SCHED^PSS51P1(WIEN,.ORARRAY)<br/> S ILST=0<br/> S CNT=0 F  S CNT=$O(ORARRAY(CNT)) Q:CNT'>0  D<br/> .S NODE=$G(ORARRAY(CNT))<br/> .I $P(NODE,U,4)="C" D<br/> ..K ^TMP($J,"ORWDPS1 DOWSCH")<br/> ..D ZERO^PSS51P1($P(NODE,U),,,,"ORWDPS1 DOWSCH")<br/> ..S FREQ=$G(^TMP($J,"ORWDPS1 DOWSCH",$P(NODE,U),2))<br/> ..K ^TMP($J,"ORWDPS1 DOWSCH")<br/> ..I +FREQ=0 Q<br/> ..I +FREQ>1440 Q<br/> ..S ILST=ILST+1,LST(ILST)=$P(ORARRAY(CNT),U,2,5)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}LOCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Location IEN from file 44{:/} | 




 Generated on January 13th 2017, 7:11:27 am