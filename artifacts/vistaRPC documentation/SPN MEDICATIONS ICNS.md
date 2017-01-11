---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN MEDICATIONS ICNS 

 property | value 
--- | --- 
 label | SPN MEDICATIONS ICNS
 tag | COL
 routine | [SPNJRPDC](http://code.osehra.org/dox/Routine_SPNJRPDC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns list of ICNs of all patients prescribed a specific VA Drug Class during a given date range.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FDATE | LITERAL |  |  | Date to begin Medications search | 
| TDATE | LITERAL |  |  | Date to end Medications search | 
| VADC | LITERAL |  |  | VA Drug Class list (array format) | 
| ICNLST | LITERAL |  |  | List of ICNs to search from | 




 ###### Generated on January 11th 2017, 6:39:43 am