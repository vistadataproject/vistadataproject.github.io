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
 Lines | ```
 N CNT,NODE,NUM K VALUES
 S CNT=0
 S NUM=0 F  S NUM=$O(^TIU(8925.1,"AT","CL",NUM)) Q:NUM<1  D
 .I '$$CLASPICK^TIULA4(38,NUM,"CL") Q
 .S NODE=$G(^TIU(8925.1,NUM,0))
 .I '$L(NODE) Q
 .S CNT=CNT+1
 .S VALUES(CNT)=NUM_U_NODE```
 Leading comment lines | {::nomarkdown}get available document classes{:/}




 Generated on January 13th 2017, 6:55:29 am