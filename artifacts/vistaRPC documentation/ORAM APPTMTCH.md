---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORAM APPTMTCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORAM APPTMTCH{:/}
 tag | {::nomarkdown}APPTMTCH{:/}
 routine | [ORAM](http://code.osehra.org/dox/Routine_ORAM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC supports revision of the appointment match when the user selects a new Clinic in Anticoagulator.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORAMDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID.{:/} | 
| {::nomarkdown}ORAMCL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the Clinic in the Hospital Location File (#44).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}