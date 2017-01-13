---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX1 STCHANGE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX1 STCHANGE{:/}
 tag | {::nomarkdown}STCHANGE{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}DFN<br/>ORYARR{:/}
 Lines | ```{::nomarkdown} N CNT,DONE,NODE,PHARMID,STR,STATUS<br/> S ORY=0,DONE=0<br/> I '$$PATCH^XPDUTL("PSS*1.0*93") Q<br/> S CNT=0 F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0!(DONE>0)  D<br/> . S NODE=$G(ORYARR(CNT))<br/> . S PHARMID=$P(NODE,U),STATUS=$P(NODE,U,2)<br/> . I $$UP^XLFSTR(STATUS)'=$$STATUS^PSSORUTE(DFN,PHARMID) S ORY=1,DONE=1```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ORYARR{:/} | {::nomarkdown}LIST{:/} |  |  |  | 




 Generated on January 13th 2017, 7:11:27 am