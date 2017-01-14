---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORAM2 REMIND 

 property | value 
--- | --- 
 label | {::nomarkdown}ORAM2 REMIND{:/}
 tag | {::nomarkdown}REMIND{:/}
 routine | [ORAM2](http://code.osehra.org/dox/Routine_ORAM2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets date and text for ACM Reminder (can also be set as part of a completevisit entry).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date the patient specific reminder that will start appearing when theANTICOAGULATOR is accessed.{:/} | 
| {::nomarkdown}RTEXT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Actual carrot ('^') deliminated text (by line) of the reminder.{:/} | 




 Generated on January 13th 2017, 7:15:28 am