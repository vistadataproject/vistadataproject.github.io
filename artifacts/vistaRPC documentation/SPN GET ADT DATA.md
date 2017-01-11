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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLST | LITERAL |  |  | List of patient's ICNs (ICN^ICN^ICN^ICN^ICN...) | 
| ACTDATE | LITERAL |  |  | Date to begin ADT entry search from. | 




 ###### Generated on January 11th 2017, 6:39:43 am