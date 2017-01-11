---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN GET MAILING ADDRESS 

 property | value 
--- | --- 
 label | SPN GET MAILING ADDRESS
 tag | COL
 routine | [SPNJRPC8](http://code.osehra.org/dox/Routine_SPNJRPC8_source.html)
 return value type | GLOBAL ARRAY
 description | Returns current mailing addresses for a list of given patients (based on the ICN).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLIST | LIST |  |  | Patient's ICNs in list format (ICN^ICN^ICN^ICN^ICN...) | 