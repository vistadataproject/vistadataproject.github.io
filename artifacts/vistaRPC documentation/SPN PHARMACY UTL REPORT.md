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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to start from.  mm/dd/yyyy. | 
| vs:Input_Parameter-8994_02 | COST | LITERAL |  |  | Value must be either ACTUAL OR CURRENT. | 
| vs:Input_Parameter-8994_02 | MINCOST | LITERAL |  |  | Minimum dollar cost of dispensed fills to display:  (0-9999999) | 
| vs:Input_Parameter-8994_02 | MINFILL | LITERAL |  |  | Minimum number of fills to display:  (1-999999) | 
| vs:Input_Parameter-8994_02 | PTLIST | LIST |  |  | ICN^ICN^ICN | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end collection.  mm/dd/yyyy. | 
| vs:Input_Parameter-8994_02 | HIUSERS | LITERAL |  |  | Number of highest users to identify:  (0-100) | 