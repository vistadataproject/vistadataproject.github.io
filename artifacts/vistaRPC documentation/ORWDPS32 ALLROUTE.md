---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 ALLROUTE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 ALLROUTE{:/}
 tag | {::nomarkdown}ALLROUTE{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of all available medication routes.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | returns a list of all available med routes
 Lines | ```{::nomarkdown} N I,X,ILST<br/> S ILST=0<br/> K ^TMP($J,"ORWDPS32 ALLROUTE")<br/> D ALL^PSS51P2(,"??",,,"ORWDPS32 ALLROUTE")<br/> S I=0 F  S I=$O(^TMP($J,"ORWDPS32 ALLROUTE",I)) Q:'I  D<br/> . I +$P(^TMP($J,"ORWDPS32 ALLROUTE",I,3),U)>0 S LST($$NXT)=I_U_^TMP($J,"ORWDPS32 ALLROUTE",I,.01)_U_^TMP($J,"ORWDPS32 ALLROUTE",I,1)<br/> K ^TMP($J,"ORWDPS32 ALLROUTE")```{:/}




 Generated on January 13th 2017, 7:11:26 am