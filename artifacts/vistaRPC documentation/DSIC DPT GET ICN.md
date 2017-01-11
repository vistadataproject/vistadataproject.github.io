---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DPT GET ICN 

 property | value 
--- | --- 
 label | DSIC DPT GET ICN
 tag | ICN
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | SINGLE VALUE
 description | This will return the patient's Integration Control Number (ICN) and a flag indicating whether or not it is a local ICN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PAT | LITERAL | 15 | true | This is the patient lookup value which can be the DFN or name or SSN. | 
| ISSSN | LITERAL | 1 | true | This Boolean (0, 1) flag indicates whether or not PAT (the patient lookupvalue) is a SSN value. | 




Generated on January 11th 2017, 6:34:23 am