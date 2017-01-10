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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PAT | LITERAL | 30 | true | A patient identifier which can be their DFN, Name, or SSN. | 
| vs:Input_Parameter-8994_02 | ISSSN | LITERAL | 1 | true | A boolean flag (0,1) which indicates whether or not the PAT value is a SSN value.  If a value is not passed, the flag defaults to 0. | 