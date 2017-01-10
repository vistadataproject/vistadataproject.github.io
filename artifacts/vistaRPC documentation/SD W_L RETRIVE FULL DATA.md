---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SD W_L RETRIVE FULL DATA 

 property | value 
--- | --- 
 label | SD W_L RETRIVE FULL DATA
 tag | OUTPUT
 routine | [SDWLRP1](http://code.osehra.org/dox/Routine_SDWLRP1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns a Wait List data in SDWL(409.3,DA,0). This will only return the zero (0) node of the file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Patient IEN (DFN) | REFERENCE |  | true |  | 