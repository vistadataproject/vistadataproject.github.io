---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP ADD ROC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP ADD ROC{:/}
 tag | {::nomarkdown}ADD{:/}
 routine | [DSIFROC](http://code.osehra.org/dox/Routine_DSIFROC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC duplicates the logic of the FBCH ADD ROC input template for file 161.5.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number of Contact/Fee Notification (Required - Pointer to file 162.2/161.5){:/} | 
| {::nomarkdown}DTOCT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date & Time of Contact (Required - FileMan Date/Time){:/} | 
| {::nomarkdown}NARR{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Narrative (Optional - Word Processing Array){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}