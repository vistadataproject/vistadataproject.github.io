---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRA REPORT TEXT1 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA REPORT TEXT1{:/}
 tag | {::nomarkdown}RPT1{:/}
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns an array containinga formattied imaging report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 
| {::nomarkdown}EXAMID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Imaging exam ID. Format: Inverse FM date/time of Exam_-_Case IENExample: 7049175.8893-1{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RPT1^[ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 Method comment | return imaging report
 Input parameters | {::nomarkdown}DFN<br>ORID<br>ALPHA<br>OMEGA<br>DTRANGE<br>REMOTE<br>ORMAX<br>ORFHIE{:/}
 Code | {::nomarkdown}  D RPT(.ROOT,.DFN,.ORID,.ALPHA,.OMEGA,.DTRANGE,.REMOTE,.ORMAX,.ORFHIE){:/}


### CPRS

[NOT OSEHRA CPRS]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}