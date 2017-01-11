---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN ICDS_CPTS W RAD COMMENTS 

 property | value 
--- | --- 
 label | SPN ICDS_CPTS W RAD COMMENTS
 tag | COL
 routine | [SPNJRPIW](http://code.osehra.org/dox/Routine_SPNJRPIW_source.html)
 return value type | GLOBAL ARRAY
 description | Returns ICD/CPT Codes with Radiology Comments for a given patient based on the ICN and a cutoff date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL |  |  | Individual patient's ICN. | 
| SPNCUTDT | LITERAL |  |  | Date to start search from.   | 