---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA GET CAREPLAN DA 

 property | value 
--- | --- 
 label | NUPA GET CAREPLAN DA
 tag | CPID
 routine | [NUPABCL1](http://code.osehra.org/dox/Routine_NUPABCL1_source.html)
 return value type | SINGLE VALUE
 description | Gets the DA of the latest care plan, or creates a new one if none on file since the last admission.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 99 | true | Patient's DFN. | 