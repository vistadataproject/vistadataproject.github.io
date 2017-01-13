---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT DIEDON 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT DIEDON{:/}
 tag | {::nomarkdown}DIEDON{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns date of death if patient has expired.  Otherwise returns 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Check for a date of death
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 S VAL=+$G(^DPT(DFN,.35))```




 Generated on January 13th 2017, 6:55:29 am