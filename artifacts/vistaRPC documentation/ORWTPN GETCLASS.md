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

 Property | Value 
 --- | --- 
 Method | GETCLASS^[ORWTPN](http://code.osehra.org/dox/Routine_ORWTPN_source.html)
 Method comment | RPC
 First comment | {::nomarkdown}<pre> get available document classes</pre>{:/}
 Code | {::nomarkdown}  N CNT,NODE,NUM K VALUES<br> S CNT=0<br> S NUM=0 F  S NUM=$O(^TIU(8925.1,"AT","CL",NUM)) Q:NUM<1  D<br> .I '$$CLASPICK^TIULA4(38,NUM,"CL") Q<br> .S NODE=$G(^TIU(8925.1,NUM,0))<br> .I '$L(NODE) Q<br> .S CNT=CNT+1<br> .S VALUES(CNT)=NUM_U_NODE{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}