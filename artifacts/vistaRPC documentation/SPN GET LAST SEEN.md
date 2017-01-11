---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN GET LAST SEEN 

 property | value 
--- | --- 
 label | SPN GET LAST SEEN
 tag | COL
 routine | [SPNJRPC1](http://code.osehra.org/dox/Routine_SPNJRPC1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns list of patients with the date that they were last seen at a clinic.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICNLST | LIST |  |  | An array list of Integration Control Numbers of patients in the PATIENT file (#2).  Format: ICNLST(1)=1001000001, ICNLST(2)=1001000002, etc. | 
| DAYS | LITERAL |  |  | The number of days back from current date to begin search from. | 




Generated on January 11th 2017, 6:34:23 am