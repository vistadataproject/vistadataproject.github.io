---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWMC PATIENT PROCEDURES 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWMC PATIENT PROCEDURES{:/}
 tag | {::nomarkdown}PROD{:/}
 routine | [ORWMC](http://code.osehra.org/dox/Routine_ORWMC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of patient procedures for a specific patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PROD^[ORWMC](http://code.osehra.org/dox/Routine_ORWMC_source.html)
 Method comment | Return procedures
 First comment | {::nomarkdown}RPC: ORWMC PROCEDURES<br/>See RPC definition for details on input and output parameters{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  D GET(0)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}