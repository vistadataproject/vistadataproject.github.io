---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU SUMMARIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU SUMMARIES{:/}
 tag | {::nomarkdown}SUMMARY{:/}
 routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API gets lists of Discharge Summaries for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient file.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SUMMARY^[TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 Method comment | Get Summaries
 Input parameters | {::nomarkdown}DFN, EARLY, LATE{:/}
 Code | {::nomarkdown}  N TIUPREF,TIUOCC S TIUPREF=$$PERSPRF^TIULE(DUZ)<br> S TIUOCC=$P(TIUPREF,U,10),PERSON=$S(+$G(PERSON):+$G(PERSON),1:+$G(DUZ))<br> S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")<br> D CONTEXT(.TIUY,244,1,DFN,$G(EARLY),$G(LATE),PERSON,TIUOCC,SEQUENCE){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}