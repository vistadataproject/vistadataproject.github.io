---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRA IMAGING EXAMS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA IMAGING EXAMS{:/}
 tag | {::nomarkdown}EXAMS{:/}
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list on imaging exams for aspecific patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | EXAMS^[ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 Method comment | Return imaging exams
 First comment | {::nomarkdown}RPC: ORWRA IMAGING EXAMS<br/>See RPC definition for details on input and output parameters{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  D GET(0)```




 Generated on January 14th 2017, 7:26:35 am