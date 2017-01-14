---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDX LOCK 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX LOCK{:/}
 tag | {::nomarkdown}LOCK{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC to attempt to lock patient for ordering (returns 1 if successful or 0if unsuccessful).{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LOCK^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Attempt to lock pt for ordering
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  S OK=$$LOCK^ORX2(DFN)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}