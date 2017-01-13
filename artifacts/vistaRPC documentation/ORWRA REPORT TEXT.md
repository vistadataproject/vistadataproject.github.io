---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRA REPORT TEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA REPORT TEXT{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns an array containinga formattied imaging report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return imaging report
 Input Parameters | {::nomarkdown}DFN<br/>ORID<br/>ALPHA<br/>OMEGA<br/>DTRANGE<br/>REMOTE<br/>ORMAX<br/>ORFHIE{:/}
 Lines | {::nomarkdown} N ID,LCNT,ORVP,EXAMDATE,CASENMBR<br/> S RADATA=$NA(^TMP($J,"RAE3"))<br/> S ROOT=$NA(^TMP("ORXPND",$J))<br/> K @RADATA,@ROOT<br/> S ID=$TR(ORID,"-",U)<br/> S LCNT=0,ORVP=DFN_";DPT("<br/> D XRAYS^ORCXPND1<br/> K @RADATA{:/}
 Leading comment lines | {::nomarkdown}RPC: ORWRA REPORT TEXT<br/>See RPC definition for details on input and output parameters<br/>-- init locals and globals{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 
| {::nomarkdown}EXAMID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Imaging exam ID. Format: Inverse FM date/time of Exam_-_Case IENExample: 7049175.8893-1{:/} | 




 Generated on January 13th 2017, 7:15:27 am