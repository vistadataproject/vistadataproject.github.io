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
 Input parameters | {::nomarkdown}IEN<br>FROM{:/}
 Code | {::nomarkdown}  N I,X<br> S VAL=0<br> S X=$O(^ORD(101.44,IEN,10,"C",FROM))<br> I '$L(X) Q<br> S I=$O(^ORD(101.44,IEN,10,"C",X,0))<br> Q:'I<br> S:'$$QODIS(IEN,I) VAL=+I_U_X{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rODMeds.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}