---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCS REPORT TEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCS REPORT TEXT{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns an array containinga formattied consult report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult ID.Format: Internal entry number to REQUEST/CONSULTATION file (#123)Example: 1000{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RPT^[ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
 Method comment | retrieve report text
 First comment | {::nomarkdown}  RPC: ORWCS REPORT TEXT<br/>  See RPC definition for details on input and output parameters<br/>{:/}
 Input parameters | {::nomarkdown}DFN<br>ORID{:/}
 Code | {::nomarkdown}  S ORY=$NA(^TMP("GMRCR",$J,"DT")) K @ORY Q:+ORID=0<br> D DT^GMRCSLM2(ORID){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}