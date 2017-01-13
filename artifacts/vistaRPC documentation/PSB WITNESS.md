---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB WITNESS 

 property | value 
--- | --- 
 label | {::nomarkdown}PSB WITNESS{:/}
 tag | {::nomarkdown}WITNESS{:/}
 routine | [PSBRPC1](http://code.osehra.org/dox/Routine_PSBRPC1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used by frmWintess to validate if a Witness at the client is authorized to be a witness for a BCMA action, i.e. High Risk Drug administration. Validation is achieved via not allowing the logged in person to witness for themselves, also persons that hold certain keys can't be a valid witness.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBACC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Access Code{:/} | 
| {::nomarkdown}PSBVER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Verify Code.{:/} | 




 Generated on January 13th 2017, 6:44:48 am