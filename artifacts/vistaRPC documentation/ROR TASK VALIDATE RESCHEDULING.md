---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR TASK VALIDATE RESCHEDULING 

 property | value 
--- | --- 
 label | ROR TASK VALIDATE RESCHEDULING
 tag | VALIDSCH
 routine | [RORRP012](http://code.osehra.org/dox/Routine_RORRP012_source.html)
 return value type | ARRAY
 description | The ROR TASK VALIDATE RESCHEDULING remote procedure validates the rescheduling code and returns the next date/time to run.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SCHCODE | LITERAL |  | true | Rescheduling code (\1D\, \1M\, \D@12:00\, etc). | 
| SCHDT | LITERAL |  |  | Date when a task is scheduled to run for the first time (FileMan). By default (if $G(SCHDT)'>0), the current date/time is used. | 