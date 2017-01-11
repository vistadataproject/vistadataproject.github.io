---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL CLIN SRCH 

 property | value 
--- | --- 
 label | ORQQPL CLIN SRCH
 tag | CLINSRCH
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | ARRAY
 description | Returns list of clinics for problem list. Should be replaced by CLIN^ORQPT


### Method description

 property | value 
--- | --- 
 Method comment | Get LIST OF CLINICS
 Leading comment lines | Note: This comes from CLIN^ORQPTQ2, where it was commented out in place of,a call to ^XPAR. I would have just used CLIN^ORQPTQ2, but it didn't work - at,least on SLC OEX directory.,X has no purpose other than to satisfy apparent rpc and tcallv requirement for args