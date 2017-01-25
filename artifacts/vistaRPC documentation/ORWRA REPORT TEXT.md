---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRA REPORT TEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA REPORT TEXT{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns an array containinga formattied imaging report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 
| {::nomarkdown}EXAMID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Imaging exam ID. Format: Inverse FM date/time of Exam_-_Case IENExample: 7049175.8893-1{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RPT^[ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 Method comment | return imaging report
 Input parameters | {::nomarkdown}DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE{:/}
 First comment | {::nomarkdown}<pre>  RPC: ORWRA REPORT TEXT<br/>  See RPC definition for details on input and output parameters<br/> -- init locals and globals</pre>{:/}
 Code | {::nomarkdown}  N ID,LCNT,ORVP,EXAMDATE,CASENMBR<br> S RADATA=$NA(^TMP($J,"RAE3"))<br> S ROOT=$NA(^TMP("ORXPND",$J))<br> K @RADATA,@ROOT<br> S ID=$TR(ORID,"-",U)<br> S LCNT=0,ORVP=DFN_";DPT("<br> D XRAYS^ORCXPND1<br> K @RADATA{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}