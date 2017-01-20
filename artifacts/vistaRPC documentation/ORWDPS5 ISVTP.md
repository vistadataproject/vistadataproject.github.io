---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS5 ISVTP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS5 ISVTP{:/}
 tag | {::nomarkdown}ISVTP{:/}
 routine | [ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISVTP^[ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
 Method comment | True: is verbal or telephoned or policy order
 Input parameters | {::nomarkdown}ODIEN{:/}
 Code | {::nomarkdown}  S ORY=0<br> Q:'$D(^OR(100,+ODIEN,0))<br> N VERB,TEL,POL,LSTACT,NATR<br> S (VERB,TEL,POL,LSTACT)=0,NATR=""<br> S VERB=$O(^ORD(100.02,"B","VERBAL",0))<br> S TEL=$O(^ORD(100.02,"B","TELEPHONED",0))<br> S POL=$O(^ORD(100.02,"B","POLICY",0))<br> S LSTACT=$O(^OR(100,+ODIEN,8,"?"),-1)<br> S NATR=$P(^OR(100,+ODIEN,8,LSTACT,0),U,12)<br> I (NATR=VERB)!(NATR=TEL)!(NATR=POL) S ORY=1<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}