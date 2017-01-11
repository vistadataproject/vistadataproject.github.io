---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPT2 TTIM TURNAROUND TIME 

 property | value 
--- | --- 
 label | DSIRRPT2 TTIM TURNAROUND TIME
 tag | TAT
 routine | [DSIRRPT2](http://code.osehra.org/dox/Routine_DSIRRPT2_source.html)
 return value type | GLOBAL ARRAY
 description | RPC for scheduling the Turnaround Time Report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FRDT | LITERAL | 7 | true | This is the lower date range for the report based on date received.  | 
| TODT | LITERAL | 7 | true | This is the upper date range for the report based on date received. | 
| DIVL | LITERAL | 240 | true | This is a list of division numbers delimited with a ^. | 
| SCHED | LITERAL | 1 | true | Schedule - Boolean for scheduled or immediate run           1 = Schedule / 0 or Null = Run Immediately | 
| ESTART | LITERAL | 15 | true | Earliet time to start the scheaduled task | 