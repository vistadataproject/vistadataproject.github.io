---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRA IMAGING EXAMS1 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA IMAGING EXAMS1{:/}
 tag | {::nomarkdown}EXAMS1{:/}
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list on imaging exams for aspecific patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return imaging exams
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```{::nomarkdown} D GET(1)```{:/}
 Leading comment lines | {::nomarkdown}RPC: ORWRA IMAGING EXAMS1<br/>See RPC definition for details on input and output parameters{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 




 Generated on January 13th 2017, 7:11:27 am