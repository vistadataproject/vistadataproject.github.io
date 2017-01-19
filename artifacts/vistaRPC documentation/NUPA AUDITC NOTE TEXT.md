---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA AUDITC NOTE TEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}NUPA AUDITC NOTE TEXT{:/}
 tag | {::nomarkdown}ACNOTE{:/}
 routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Saves an Audit-C note for the patient.  Uses the last administration from file 601.84.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DFN of the patient.{:/} | 
| {::nomarkdown}STRING{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Score, questions, and answers from the Audit-C.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}