---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RG PRIMARY VIEW REJECT 

 property | value 
--- | --- 
 label | RG PRIMARY VIEW REJECT
 tag | PVREJ
 routine | [MPIRPC](http://code.osehra.org/dox/Routine_MPIRPC_source.html)
 return value type | ARRAY
 description | This remote procedure call will return the Primary View Reject report for a particular station, ICN, and date range.  The date range will be from the date of the exception to the current date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SITE | LITERAL | 10 | true | This is the requesting site's station number. | 
| ICN | LITERAL | 16 | true | This is the Integration Control Number of the patient for whom data is requested. | 
| EXCEPTION DATE | LITERAL | 25 | true | The date/time of the exception will be used as the begin date for the report data extraction. | 