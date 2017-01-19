---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPN GETCLASS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPN GETCLASS{:/}
 tag | {::nomarkdown}GETCLASS{:/}
 routine | [ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETCLASS^[ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
 Method comment | RPC
 First comment | {::nomarkdown} get available document classes{:/}
 Code | {::nomarkdown}  N CNT,NODE,NUM K VALUES<br> S CNT=0<br> S NUM=0 F  S NUM=$O(^TIU(8925.1,"AT","CL",NUM)) Q:NUM<1  D<br> .I '$$CLASPICK^TIULA4(38,NUM,"CL") Q<br> .S NODE=$G(^TIU(8925.1,NUM,0))<br> .I '$L(NODE) Q<br> .S CNT=CNT+1<br> .S VALUES(CNT)=NUM_U_NODE{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}