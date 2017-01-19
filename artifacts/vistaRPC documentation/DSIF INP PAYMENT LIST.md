---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP PAYMENT LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP PAYMENT LIST{:/}
 tag | {::nomarkdown}LOOKUP{:/}
 routine | [DSIFEP1](http://code.osehra.org/dox/Routine_DSIFEP1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of all entries in file 162.5 for a given entry in 7078.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FB7078{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number to file 162.4{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}