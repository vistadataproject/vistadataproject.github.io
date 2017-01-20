---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRA IMAGING EXAMS1 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA IMAGING EXAMS1{:/}
 tag | {::nomarkdown}EXAMS1{:/}
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list on imaging exams for aspecific patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | EXAMS1^[ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 Method comment | Return imaging exams
 Input parameters | {::nomarkdown}DFN{:/}
 First comment | {::nomarkdown}<pre> RPC: ORWRA IMAGING EXAMS1<br/>  See RPC definition for details on input and output parameters</pre>{:/}
 Code | {::nomarkdown}  D GET(1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}