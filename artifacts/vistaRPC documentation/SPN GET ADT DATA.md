---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN GET ADT DATA 

 property | value 
--- | --- 
 label | SPN GET ADT DATA
 tag | COL
 routine | [SPNJRPPM](http://code.osehra.org/dox/Routine_SPNJRPPM_source.html)
 return value type | GLOBAL ARRAY
 description | Returns ADT Patient Movement entries for the requested date(s).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICNLST | LITERAL |  |  | List of patient's ICNs (ICN^ICN^ICN^ICN^ICN...) | 
| vs:Input_Parameter-8994_02 | ACTDATE | LITERAL |  |  | Date to begin ADT entry search from. | 