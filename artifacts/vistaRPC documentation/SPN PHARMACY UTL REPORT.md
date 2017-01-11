---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN PHARMACY UTL REPORT 

 property | value 
--- | --- 
 label | SPN PHARMACY UTL REPORT
 tag | RPC
 routine | [SPNLRL7](http://code.osehra.org/dox/Routine_SPNLRL7_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FDATE | LITERAL |  |  | Date to start from.  mm/dd/yyyy. | 
| COST | LITERAL |  |  | Value must be either ACTUAL OR CURRENT. | 
| MINCOST | LITERAL |  |  | Minimum dollar cost of dispensed fills to display:  (0-9999999) | 
| MINFILL | LITERAL |  |  | Minimum number of fills to display:  (1-999999) | 
| PTLIST | LIST |  |  | ICN^ICN^ICN | 
| TDATE | LITERAL |  |  | Date to end collection.  mm/dd/yyyy. | 
| HIUSERS | LITERAL |  |  | Number of highest users to identify:  (0-100) | 




 Generated on January 11th 2017, 7:15:04 am