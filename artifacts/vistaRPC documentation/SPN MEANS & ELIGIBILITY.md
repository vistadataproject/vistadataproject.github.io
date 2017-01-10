---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN MEANS & ELIGIBILITY 

 property | value 
--- | --- 
 label | SPN MEANS & ELIGIBILITY
 tag | COL
 routine | [SPNJRPE2](http://code.osehra.org/dox/Routine_SPNJRPE2_source.html)
 return value type | GLOBAL ARRAY
 description | Returns list of current Means and Eligibility for all requested patients

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICNLIST | LITERAL |  |  | List of patient ICNs to process | 