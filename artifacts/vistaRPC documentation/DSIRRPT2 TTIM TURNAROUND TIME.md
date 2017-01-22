---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPT2 TTIM TURNAROUND TIME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPT2 TTIM TURNAROUND TIME{:/}
 tag | {::nomarkdown}TAT{:/}
 routine | [DSIRRPT2](http://code.osehra.org/dox/Routine_DSIRRPT2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}RPC for scheduling the Turnaround Time Report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the lower date range for the report based on date received. {:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the upper date range for the report based on date received.{:/} | 
| {::nomarkdown}DIVL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}240{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of division numbers delimited with a ^.{:/} | 
| {::nomarkdown}SCHED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Schedule - Boolean for scheduled or immediate run           1 = Schedule / 0 or Null = Run Immediately{:/} | 
| {::nomarkdown}ESTART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Earliet time to start the scheaduled task{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}