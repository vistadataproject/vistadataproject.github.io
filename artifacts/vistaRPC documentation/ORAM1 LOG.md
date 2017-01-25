---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORAM1 LOG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORAM1 LOG{:/}
 tag | {::nomarkdown}LOGIT{:/}
 routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Updates Anticoagulation Flowsheet file (#103) and adds log entry.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FSARRAY{:/} | {::nomarkdown}LIST{:/} |  |  |  | 
| {::nomarkdown}COMP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}COMP=0 Will remove this entry's complication indication code (instead of1= Major Bleed, 2=Clot, 3=Minor Bleed), the original complicatons will stay in the file, but they will no longer be visible or considered in reports based on the COMPLICATION code (104).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}