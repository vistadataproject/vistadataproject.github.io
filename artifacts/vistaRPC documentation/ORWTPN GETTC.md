---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPN GETTC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPN GETTC{:/}
 tag | {::nomarkdown}GETTC{:/}
 routine | [ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETTC^[ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
 Method comment | RPC
 First comment | {::nomarkdown}get titles for a class{:/}
 Input parameters | {::nomarkdown}CLASS<br/>FROM<br/>DIR{:/}
 Code | ```  N CNT,IEN,NODE,NUM K VALUES
 S CNT=44,NUM=0
 F  Q:NUM>CNT  S FROM=$O(^TIU(8925.1,"B",FROM),DIR) Q:FROM=""  D
 .S IEN=0 F  S IEN=$O(^TIU(8925.1,"B",FROM,IEN)) Q:IEN<1  D
 ..I '$D(^TIU(8925.1,"AT","DOC",IEN)) Q
 ..I '$$ISA^TIULX(IEN,CLASS) Q
 ..I '$$CANPICK^TIULP(IEN) Q
 ..I '$$CANENTR^TIULP(IEN) Q
 ..S NODE=$G(^TIU(8925.1,IEN,0))
 ..I '$L(NODE) Q
 ..S NUM=NUM+1
 ..S VALUES(NUM)=IEN_U_NODE```




 Generated on January 14th 2017, 7:26:35 am