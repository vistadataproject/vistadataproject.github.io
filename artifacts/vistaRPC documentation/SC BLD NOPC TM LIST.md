---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SC BLD NOPC TM LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SC BLD NOPC TM LIST{:/}
 tag | {::nomarkdown}NOPCTM{:/}
 routine | [SCMCBK1](http://code.osehra.org/dox/Routine_SCMCBK1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Builds a list of patients that have a primary care assignment, but nocurrent primary care team assignment.  Uses $$PTPCNTM^SCAPMC20{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETER LIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in Team to be assigned to and effective date for search.Position to be assigned to is required for assign to position{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}