---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ANRV PTINFO CORE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ANRV PTINFO CORE{:/}
 tag | {::nomarkdown}PINF{:/}
 routine | [ANRVOA](http://code.osehra.org/dox/Routine_ANRVOA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns patient information for verification.  Must be changed eventuallyto include current Sensitive Patient Check.(TO DO).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patients Internal entry number.{:/} | 
| {::nomarkdown}RESULTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Bolus of patient information.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}