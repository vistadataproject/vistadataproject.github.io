---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS DEFAULT REASON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS DEFAULT REASON{:/}
 tag | {::nomarkdown}DEFREA{:/}
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns the specified Consult Service default reason for request. Cloned from ORQQCN DEFAULT REQUEST REASON RPC.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFSVC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN for the Consult Service.{:/} | 
| {::nomarkdown}DSIFDFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the Patient DFN.{:/} | 
| {::nomarkdown}DSIFRES{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the RESOLVE variable, which indicates boilerplates should be used.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}