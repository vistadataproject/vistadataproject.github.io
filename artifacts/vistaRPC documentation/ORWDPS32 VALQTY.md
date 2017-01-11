---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDPS32 VALQTY 

 property | value 
--- | --- 
 label | ORWDPS32 VALQTY
 tag | VALQTY
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | SINGLE VALUE
 description | Validate a medication quantity and return a 1 if it is valid, otherwisereturn 0.


### Method description

 property | value 
--- | --- 
 Method comment | validate a quantity, return 1 if valid, 0 if not
 Leading comment lines | to be compatible with LM, make sure X is integer from 1 to 240,this is based on the input transform from 52,7