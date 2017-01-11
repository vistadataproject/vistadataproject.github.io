---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP CANCEL 7078 

 property | value 
--- | --- 
 label | DSIF INP CANCEL 7078
 tag | CAN7078
 routine | [DSIFNOT2](http://code.osehra.org/dox/Routine_DSIFNOT2_source.html)
 return value type | SINGLE VALUE
 description | This RPC will mark the 7078 cancelled and if possible remove the Non-VA PTF record and make modifications to the 1358.  Logic cloned from existing routine FBCHC78.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 99 | true | Pointer to file 162.4 VA FORM 10-7078 (Required) | 