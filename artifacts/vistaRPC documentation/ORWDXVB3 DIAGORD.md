---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB3 DIAGORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB3 DIAGORD{:/}
 tag | {::nomarkdown}DIAGORD{:/}
 routine | [ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get sequence order of Diagnostic Tests for selection.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DIAGORD^[ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 Method comment | Get sequence order of Diagnostic tests
 Code | {::nomarkdown}  N ORLIST,I,X<br> D GETLST^XPAR(.ORLIST,"ALL","OR VBECS DIAGNOSTIC TEST ORDER")<br> S I=0 F  S I=$O(ORLIST(I)) Q:'I  S X=ORLIST(I) I $D(^ORD(101.43,$P(X,"^",2),0)) S OROOT(I)=$P(X,"^",2)_"^"_$P(^(0),"^",1)_"^"_$P(^(0),"^",1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}