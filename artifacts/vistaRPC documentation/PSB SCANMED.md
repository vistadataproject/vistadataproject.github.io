---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB SCANMED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB SCANMED{:/}
 tag | {::nomarkdown}SCANMED{:/}
 routine | [PSBRPC2](http://code.osehra.org/dox/Routine_PSBRPC2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Takes the scanned valued from the medication and does a lookup on file 50 for an exact match.  If more than one or less than one entry are found for the lookup an error is returned to the client.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SCANVAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the data received from the client scanning the medication.{:/} | 
| {::nomarkdown}PSBDIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Takes the scanned valued from the medication and does a lookup on file50 for an exact match.  If more than one or less than one entry arefound for the lookup an error is returned to the client.{:/} | 
| {::nomarkdown}PSBTAB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the current tab the user is on.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}