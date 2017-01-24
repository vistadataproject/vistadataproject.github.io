---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRA IMAGING EXAMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA IMAGING EXAMS{:/}
 tag | {::nomarkdown}EXAMS{:/}
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
 Method | EXAMS^[ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 Method comment | Return imaging exams
 Input parameters | {::nomarkdown}DFN{:/}
 First comment | {::nomarkdown}<pre> RPC: ORWRA IMAGING EXAMS<br/>  See RPC definition for details on input and output parameters</pre>{:/}
 Code | {::nomarkdown}  D GET(0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}