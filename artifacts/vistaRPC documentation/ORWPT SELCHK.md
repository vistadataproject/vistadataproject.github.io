---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT SELCHK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT SELCHK{:/}
 tag | {::nomarkdown}SELCHK{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a 1 if the patient record is flagged as senstive, otherwisereturns 0.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SELCHK^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Check for sensitive pt
 Input parameters | {::nomarkdown}DFN{:/}
 First comment | {::nomarkdown}<pre> SENSITIVE</pre>{:/}
 Code | {::nomarkdown}  S REC=$$EN1^ORQPT2(DFN){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}