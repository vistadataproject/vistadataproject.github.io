---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; WII ADT 

 property | value 
--- | --- 
 label | WII ADT
 tag | EN
 routine | [WIIADT1](http://code.osehra.org/dox/Routine_WIIADT1_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure is run ONLY at the central collection point.It generates a list of all admissions and discharges that have beentransferred to the main collection point.  The RPC allows the user toselect all entries that have not been sent to DEFAS or regenerate the listby a date.  Data is extracted from the WII ADT ALL SITES FILE (#987.7).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATE | WORD PROCESSING | 15 | true |  | 




 ###### Generated on January 11th 2017, 6:39:43 am