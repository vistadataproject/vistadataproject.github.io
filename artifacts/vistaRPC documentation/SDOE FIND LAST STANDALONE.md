---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE FIND LAST STANDALONE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SDOE FIND LAST STANDALONE{:/}
 tag | {::nomarkdown}GETLAST{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns the internal entrynumber of an OUTPATIENT ENCOUNTER file (#409.68) entry for thelast standalone add/edit for a patient in a specified date range.Standalone encounter is an encounter with no parent and theoriginating process is 'Stop Code Addition'.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the PATIENT [#2 - ^DPT] file.{:/} | 
| {::nomarkdown}BEGIN DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Beginning date and time in VA FileMan format.Time is optional.{:/} | 
| {::nomarkdown}SEARCH FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter allows developers to set specific flags that areused as an API searches encounter records. The flags indicate howthe API should function. Character  Description ---------  -----------     C      Use only completed encounters{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}