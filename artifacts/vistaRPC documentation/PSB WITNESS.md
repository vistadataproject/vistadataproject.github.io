---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB WITNESS 

 property | value 
--- | --- 
 label | PSB WITNESS
 tag | WITNESS
 routine | [PSBRPC1](http://code.osehra.org/dox/Routine_PSBRPC1_source.html)
 return value type | ARRAY
 description | Used by frmWintess to validate if a Witness at the client is authorized to be a witness for a BCMA action, i.e. High Risk Drug administration. Validation is achieved via not allowing the logged in person to witness for themselves, also persons that hold certain keys can't be a valid witness.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBACC | LITERAL |  | true | Access Code | 
| PSBVER | LITERAL |  | true | Verify Code. | 




 Generated on January 11th 2017, 7:15:04 am