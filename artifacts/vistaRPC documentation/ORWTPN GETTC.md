---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPN GETTC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPN GETTC{:/}
 tag | {::nomarkdown}GETTC{:/}
 routine | [ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETTC^[ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
 Method comment | RPC
 Input parameters | {::nomarkdown}CLASS, FROM, DIR{:/}
 First comment | {::nomarkdown}<pre> get titles for a class</pre>{:/}
 Code | {::nomarkdown}  N CNT,IEN,NODE,NUM K VALUES<br> S CNT=44,NUM=0<br> F  Q:NUM>CNT  S FROM=$O(^TIU(8925.1,"B",FROM),DIR) Q:FROM=""  D<br> .S IEN=0 F  S IEN=$O(^TIU(8925.1,"B",FROM,IEN)) Q:IEN<1  D<br> ..I '$D(^TIU(8925.1,"AT","DOC",IEN)) Q<br> ..I '$$ISA^TIULX(IEN,CLASS) Q<br> ..I '$$CANPICK^TIULP(IEN) Q<br> ..I '$$CANENTR^TIULP(IEN) Q<br> ..S NODE=$G(^TIU(8925.1,IEN,0))<br> ..I '$L(NODE) Q<br> ..S NUM=NUM+1<br> ..S VALUES(NUM)=IEN_U_NODE{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}