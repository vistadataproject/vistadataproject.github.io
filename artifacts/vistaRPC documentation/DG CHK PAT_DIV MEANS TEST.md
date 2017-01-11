---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DG CHK PAT_DIV MEANS TEST 

 property | value 
--- | --- 
 label | DG CHK PAT_DIV MEANS TEST
 tag | GUIMTD
 routine | [DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
 return value type | ARRAY
 description | CHECKS IF MEANS TEST REQUIRED FOR PATIENT ANDCHECKS IF MEANS TEST DISPLAY REQUIRED FOR USER'S DIVISIONRETURNS 1 IN 1ST STRING IF BOTH TRUE OTHERWISE 0IF BOTH TRUE RETURNS TEXT IN 2ND AND 3RD STRING (IF ANY)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | PATIENT IEN | 
| DUZ2 | LITERAL |  | true | Institution file pointer | 




Generated on January 11th 2017, 6:34:23 am