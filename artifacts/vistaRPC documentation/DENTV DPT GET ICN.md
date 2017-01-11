---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV DPT GET ICN 

 property | value 
--- | --- 
 label | DENTV DPT GET ICN
 tag | ICN
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | SINGLE VALUE
 description | This RPC takes in a patient identifier and returns the patient's ICN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PAT | LITERAL | 30 | true | A patient identifier which can be their DFN, Name, or SSN. | 
| ISSSN | LITERAL | 1 | true | A boolean flag (0,1) which indicates whether or not the PAT value is a SSN value.  If a value is not passed, the flag defaults to 0. | 




Generated on January 11th 2017, 6:34:23 am