---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL PROBLEM NTRT BULLETIN 

 property | value 
--- | --- 
 label | ORQQPL PROBLEM NTRT BULLETIN
 tag | NTRTBULL
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | SINGLE VALUE
 description | This RPC generates a bulletin to the OR CAC Mail Group, indicating that an unresolved term needs to be requested using the New Term Rapid Turnaround website at http://hdrmul7.aac.domain.ext:7151/ntrt/.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORTERM | LITERAL | 255 | true | This is the unresolved term for which an NTRT Request should be filed. | 