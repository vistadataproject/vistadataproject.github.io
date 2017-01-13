---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCS REPORT TEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCS REPORT TEXT{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns an array containinga formattied consult report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | retrieve report text
 Leading comment lines | {::nomarkdown}RPC: ORWCS REPORT TEXT<br/>See RPC definition for details on input and output parameters{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult ID.Format: Internal entry number to REQUEST/CONSULTATION file (#123)Example: 1000{:/} | 




 Generated on January 13th 2017, 6:44:47 am