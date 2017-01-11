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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDFN | LITERAL |  | true | This is the patient IEN. | 
| TIUSEC | LITERAL |  | true | This BOOLEAN value allows sensitive patient data to be displayed or hidden. | 
| TIUGHS | LITERAL |  | true | This BOOLEAN value determines whether or not HEALTH SUMMARY information will included after the patient data. | 




Generated on January 11th 2017, 6:34:23 am