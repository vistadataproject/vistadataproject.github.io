---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN ICDS_CPTS & DESCRIPTIONS 

 property | value 
--- | --- 
 label | SPN ICDS_CPTS & DESCRIPTIONS
 tag | COL
 routine | [SPNJRPCX](http://code.osehra.org/dox/Routine_SPNJRPCX_source.html)
 return value type | GLOBAL ARRAY
 description | Returns ICD/CPT Codes and Descriptions for a given patient based on the ICN and a cutoff date. 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICN | LITERAL |  |  | Individual Patient's ICN  | 
| vs:Input_Parameter-8994_02 | SPNCUTDT | LITERAL |  |  | Date to start search from.   | 