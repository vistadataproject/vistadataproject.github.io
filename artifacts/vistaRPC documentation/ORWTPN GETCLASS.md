---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPN GETCLASS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPN GETCLASS{:/}
 tag | {::nomarkdown}GETCLASS{:/}
 routine | [ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC
 Lines | {::nomarkdown} N CNT,NODE,NUM K VALUES<br/> S CNT=0<br/> S NUM=0 F  S NUM=$O(^TIU(8925.1,"AT","CL",NUM)) Q:NUM<1  D<br/> .I '$$CLASPICK^TIULA4(38,NUM,"CL") Q<br/> .S NODE=$G(^TIU(8925.1,NUM,0))<br/> .I '$L(NODE) Q<br/> .S CNT=CNT+1<br/> .S VALUES(CNT)=NUM_U_NODE{:/}
 Leading comment lines | {::nomarkdown}get available document classes{:/}




 Generated on January 13th 2017, 7:15:27 am