---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS CHANGE CASE STATUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS CHANGE CASE STATUS{:/}
 tag | {::nomarkdown}CHGCASE{:/}
 routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call passes in the ASISTS IEN, new case status and if the casestatus is deleted the reason for deletion.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The INPUT parameter has the format: IEN^CASE STATUS where IEN is the ASIST record IEN and CASE STATUS is the case status the claim should be changed to.{:/} | 
| {::nomarkdown}FLD58{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} |  | {::nomarkdown}The parameter FLD58 is the text field Reason for Deletion if the case statushas been changed to deleted.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}