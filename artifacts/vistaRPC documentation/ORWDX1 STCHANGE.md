---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX1 STCHANGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX1 STCHANGE{:/}
 tag | {::nomarkdown}STCHANGE{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ORYARR{:/} | {::nomarkdown}LIST{:/} |  |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | STCHANGE^[ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 Input parameters | {::nomarkdown}DFN, ORYARR{:/}
 Code | {::nomarkdown}  N CNT,DONE,NODE,PHARMID,STR,STATUS<br> S ORY=0,DONE=0<br> I '$$PATCH^XPDUTL("PSS*1.0*93") Q<br> S CNT=0 F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0!(DONE>0)  D<br> . S NODE=$G(ORYARR(CNT))<br> . S PHARMID=$P(NODE,U),STATUS=$P(NODE,U,2)<br> . I $$UP^XLFSTR(STATUS)'=$$STATUS^PSSORUTE(DFN,PHARMID) S ORY=1,DONE=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}