---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR TASK VALIDATE RESCHEDULING 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR TASK VALIDATE RESCHEDULING{:/}
 tag | {::nomarkdown}VALIDSCH{:/}
 routine | [RORRP012](http://code.osehra.org/dox/Routine_RORRP012_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR TASK VALIDATE RESCHEDULING remote procedure validates the rescheduling code and returns the next date/time to run.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SCHCODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Rescheduling code (\1D\, \1M\, \D@12:00\, etc).{:/} | 
| {::nomarkdown}SCHDT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date when a task is scheduled to run for the first time (FileMan). By default (if $G(SCHDT)'>0), the current date/time is used.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}