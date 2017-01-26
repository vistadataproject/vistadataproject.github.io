---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR GET SURG CONTEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR GET SURG CONTEXT{:/}
 tag | {::nomarkdown}GTSURCTX{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GTSURCTX^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | Returns current Notes view context for user
 Input parameters | {::nomarkdown}ORUSER{:/}
 Code | {::nomarkdown}  N OCCLIM,SHOWSUB<br> S Y=$$GET^XPAR("ALL","ORCH CONTEXT SURGERY",1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}