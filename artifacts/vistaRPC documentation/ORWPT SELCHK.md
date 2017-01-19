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

 property | value 
 --- | --- 
 Method | SELCHK^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Check for sensitive pt
 First comment | {::nomarkdown}<pre> SENSITIVE</pre>{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  S REC=$$EN1^ORQPT2(DFN){:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}