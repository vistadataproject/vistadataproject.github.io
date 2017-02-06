---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB WITNESS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB WITNESS{:/}
 tag | {::nomarkdown}WITNESS{:/}
 routine | [PSBRPC1](http://code.osehra.org/dox/Routine_PSBRPC1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used by frmWintess to validate if a Witness at the client is authorized to be a witness for a BCMA action, i.e. High Risk Drug administration. Validation is achieved via not allowing the logged in person to witness for themselves, also persons that hold certain keys can't be a valid witness.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBACC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Access Code{:/} | 
| {::nomarkdown}PSBVER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Verify Code.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}