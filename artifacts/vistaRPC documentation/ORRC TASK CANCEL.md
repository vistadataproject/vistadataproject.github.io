---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORRC TASK CANCEL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORRC TASK CANCEL{:/}
 tag | {::nomarkdown}CANC{:/}
 routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call accepts a list of patient task ID's to be marked as canceled.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}TASKS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of task identifiers in the form TSK:##, where ## is thepointer to the Patient Task file #102.3.{:/} | 




 Generated on January 14th 2017, 7:26:36 am