---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; WII ADT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}WII ADT{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [WIIADT1](http://code.osehra.org/dox/Routine_WIIADT1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure is run ONLY at the central collection point.It generates a list of all admissions and discharges that have beentransferred to the main collection point.  The RPC allows the user toselect all entries that have not been sent to DEFAS or regenerate the listby a date.  Data is extracted from the WII ADT ALL SITES FILE (#987.7).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}WORD PROCESSING{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}