---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 ALLROUTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 ALLROUTE{:/}
 tag | {::nomarkdown}ALLROUTE{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of all available medication routes.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ALLROUTE^[ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 Method comment | returns a list of all available med routes
 Code | {::nomarkdown}  N I,X,ILST<br> S ILST=0<br> K ^TMP($J,"ORWDPS32 ALLROUTE")<br> D ALL^PSS51P2(,"??",,,"ORWDPS32 ALLROUTE")<br> S I=0 F  S I=$O(^TMP($J,"ORWDPS32 ALLROUTE",I)) Q:'I  D<br> . I +$P(^TMP($J,"ORWDPS32 ALLROUTE",I,3),U)>0 S LST($$NXT)=I_U_^TMP($J,"ORWDPS32 ALLROUTE",I,.01)_U_^TMP($J,"ORWDPS32 ALLROUTE",I,1)<br> K ^TMP($J,"ORWDPS32 ALLROUTE"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}