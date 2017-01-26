---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU SUMMARIES BY VISIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU SUMMARIES BY VISIT{:/}
 tag | {::nomarkdown}SUMMARY{:/}
 routine | [TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API returns lists of Discharge Summaries by visit.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VISIT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the visit file.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SUMMARY^[TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
 Method comment | Gets list of Summaries
 Input parameters | {::nomarkdown}VISIT, STATUS{:/}
 Code | {::nomarkdown}  I $S(+$G(VISIT)'>0:1,'$D(^AUPNVSIT(+$G(VISIT),0)):1,1:0) Q<br> D LIST(.TIUY,VISIT,244,$G(STATUS)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}