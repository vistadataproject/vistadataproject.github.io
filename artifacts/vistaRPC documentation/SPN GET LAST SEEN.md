---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN GET LAST SEEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN GET LAST SEEN{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPC1](http://code.osehra.org/dox/Routine_SPNJRPC1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns list of patients with the date that they were last seen at a clinic.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}An array list of Integration Control Numbers of patients in the PATIENT file (#2).  Format: ICNLST(1)=1001000001, ICNLST(2)=1001000002, etc.{:/} | 
| {::nomarkdown}DAYS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The number of days back from current date to begin search from.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}