---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL QVSUB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL QVSUB{:/}
 tag | {::nomarkdown}QVSUB{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | QVSUB^[ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 Method comment | return subset of orders in view
 Input parameters | {::nomarkdown}IEN, FIRST, LAST{:/}
 Code | {::nomarkdown}  N I,J,ID ;117<br> I $L(FIRST),$L(LAST) D<br> . F I=+FIRST:1:+LAST D<br> .. I $D(^ORD(101.44,IEN,10,I,0))>0 D<br> ... I '$$QODIS(IEN,I) S LST(I)=^ORD(101.44,IEN,10,I,0)<br> E  D<br> . S (I,J)=0 F  S I=$O(^ORD(101.44,IEN,10,I)) Q:'+I  I '$$QODIS(IEN,I) S J=J+1,LST(J)=^ORD(101.44,IEN,10,I,0) ;117{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}