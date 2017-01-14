---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT DIEDON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT DIEDON{:/}
 tag | {::nomarkdown}DIEDON{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns date of death if patient has expired.  Otherwise returns 0.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DIEDON^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Check for a date of death
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  S VAL=+$G(^DPT(DFN,.35)){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}