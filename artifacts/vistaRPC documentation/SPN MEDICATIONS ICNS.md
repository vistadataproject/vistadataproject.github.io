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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to begin Medications search | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end Medications search | 
| vs:Input_Parameter-8994_02 | VADC | LITERAL |  |  | VA Drug Class list (array format) | 
| vs:Input_Parameter-8994_02 | ICNLST | LITERAL |  |  | List of ICNs to search from | 