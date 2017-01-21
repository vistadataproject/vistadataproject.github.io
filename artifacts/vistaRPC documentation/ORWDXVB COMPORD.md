---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB COMPORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB COMPORD{:/}
 tag | {::nomarkdown}COMPORD{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get sequence order of Blood Components for selection.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | COMPORD^[ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 Method comment | Get sequence order of Blood Components
 Code | {::nomarkdown}  N ORLIST,I,X<br> D GETLST^XPAR(.ORLIST,"ALL","OR VBECS COMPONENT ORDER")<br> S I=0 F  S I=$O(ORLIST(I)) Q:'I  S X=ORLIST(I) I $D(^ORD(101.43,$P(X,"^",2),0)) S OROOT(I)=$P(X,"^",2)_"^"_$P(^(0),"^",1)_"^"_$P(^(0),"^",1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}