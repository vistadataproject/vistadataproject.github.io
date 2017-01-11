---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPTV FOIAV FOIA VALIDATION 

 property | value 
--- | --- 
 label | DSIRRPTV FOIAV FOIA VALIDATION
 tag | FOIAV
 routine | [DSIRRPTV](http://code.osehra.org/dox/Routine_DSIRRPTV_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will return a global array of all records thkat were looked atfor the year end FOIA report.  It will contain the internal requestnumber and patient name/FOIA indicator, and a one for any block on thereport that the given request was included on.  It also contains allrecord that, during the report period, were entered in error or of thetype of request/requestor type of an excluded state reporting agency.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FRDT | LITERAL | 7 | true | Start date for report data. | 
| TODT | LITERAL | 7 | true | Last date for reporting. | 
| DIV | LITERAL | 99 | true | List of one or more divisions for which data will be reported.  I omitted, the clerk's DUZ(2) will be used. | 
| SCHED | LITERAL | 1 | true | Schedule - Boolean for scheduled or immediate run           1 = Schedule / 0 or Null = Run Immediately | 
| ESTART | LITERAL | 15 | true | Earliet time to start the scheaduled task. | 