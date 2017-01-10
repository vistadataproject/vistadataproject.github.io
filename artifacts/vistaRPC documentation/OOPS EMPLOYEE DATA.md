---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS EMPLOYEE DATA 

 property | value 
--- | --- 
 label | OOPS EMPLOYEE DATA
 tag | PAID
 routine | [OOPSGUI4](http://code.osehra.org/dox/Routine_OOPSGUI4_source.html)
 return value type | ARRAY
 description | This call returns a listing of individuals in the PAID file #450 that matchthe Name or partial name entered.  It returns PAID fields 6, 10, 13, 16, 31,32, 38, 186.1, 186.3, 186, 186.4, 458, 604.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | NAME | LITERAL | 256 |  | This parameter contains the name or partial name of the employee being lookedup. | 