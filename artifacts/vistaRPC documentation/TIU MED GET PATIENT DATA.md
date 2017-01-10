---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU MED GET PATIENT DATA 

 property | value 
--- | --- 
 label | TIU MED GET PATIENT DATA
 tag | GETPATDT
 routine | [TIUMED1](http://code.osehra.org/dox/Routine_TIUMED1_source.html)
 return value type | ARRAY
 description | Returns patient data.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TIUDFN | LITERAL |  | true | This is the patient IEN. | 
| vs:Input_Parameter-8994_02 | TIUSEC | LITERAL |  | true | This BOOLEAN value allows sensitive patient data to be displayed or hidden. | 
| vs:Input_Parameter-8994_02 | TIUGHS | LITERAL |  | true | This BOOLEAN value determines whether or not HEALTH SUMMARY information will included after the patient data. | 