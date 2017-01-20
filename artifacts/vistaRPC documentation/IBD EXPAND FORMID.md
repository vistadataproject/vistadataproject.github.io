---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBD EXPAND FORMID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}IBD EXPAND FORMID{:/}
 tag | {::nomarkdown}IDPAT{:/}
 routine | [IBDFRPC3](http://code.osehra.org/dox/Routine_IBDFRPC3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call will convert a form id (printed at the top of an encounter form)and return information about the patient, the appointment, and the form.See routine IBDRPC3 for output descritpion.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FORMID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the form id printed at the top of the encounter form, and shouldmatch and internal entry number from the FORM TRACKING file (357.96).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}