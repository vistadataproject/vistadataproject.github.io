---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALSCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALSCH{:/}
 tag | {::nomarkdown}VALSCH{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validate a schedule and return a 1 if it is valid, otherwise return 0.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VALSCH^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | validate a schedule, return 1 if valid, 0 if not
 Input parameters | {::nomarkdown}X<br>PSTYPE{:/}
 Code | {::nomarkdown}  I '$L($T(EN^PSSGSGUI)) S OK=-1 Q<br> I $E($T(EN^PSSGSGUI),1,4)="EN(X" D<br> . N ORX S ORX=$G(X) D EN^PSSGSGUI(.ORX,$G(PSTYPE,"I"))<br> . K X S:$D(ORX) X=ORX<br> E  D<br> . D EN^PSSGSGUI<br> S OK=$S($D(X):1,1:0)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}