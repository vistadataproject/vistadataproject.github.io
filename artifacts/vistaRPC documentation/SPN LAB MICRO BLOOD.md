---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN LAB MICRO BLOOD 

 property | value 
--- | --- 
 label | SPN LAB MICRO BLOOD
 tag | COL
 routine | [SPNRPCF](http://code.osehra.org/dox/Routine_SPNRPCF_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC supports the following report(s): Report Page Name                SubscreenUrinary Tract Infections        Microbiology Blood Notes:   DFN = Internal Entry Number of patient in PATIENT file (#2)CUTDATE = Cut off date. Results are inclusive from cut offdate to present Tested at the Bay Pines FO account using DFN = 10000262 andCUTDATE=1-1-1900.  Of course, at other sites, DFN would vary.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICN | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | CUTDATE | LITERAL |  |  |  | 