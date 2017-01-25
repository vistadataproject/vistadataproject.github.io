---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALRATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALRATE{:/}
 tag | {::nomarkdown}VALRATE{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return a 1 if IV rate text is valid, otherwise return 0.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VALRATE^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return "1" (true) if IV rate text is valid
 Input parameters | {::nomarkdown}X{:/}
 Code | {::nomarkdown}  I $E($RE($$UPPER^ORWDPS32(X)),1,5)="RH/LM"  S X=$E(X,1,$L(X)-5)<br> S X=$$TRIM^ORWDPS32(X)<br> D ORINF^PSIVSP S VAL=$G(X) ;S OK=$S($D(X):1,1:0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}