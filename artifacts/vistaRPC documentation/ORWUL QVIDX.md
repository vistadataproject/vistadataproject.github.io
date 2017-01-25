---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL QVIDX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL QVIDX{:/}
 tag | {::nomarkdown}QVIDX{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | QVIDX^[ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 Method comment | return index of item beginning with FROM
 Input parameters | {::nomarkdown}IEN, FROM{:/}
 Code | {::nomarkdown}  N I,X<br> S VAL=0<br> S X=$O(^ORD(101.44,IEN,10,"C",FROM))<br> I '$L(X) Q<br> S I=$O(^ORD(101.44,IEN,10,"C",X,0))<br> Q:'I<br> S:'$$QODIS(IEN,I) VAL=+I_U_X{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}