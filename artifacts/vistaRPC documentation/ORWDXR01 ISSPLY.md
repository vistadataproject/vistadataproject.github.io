---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR01 ISSPLY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR01 ISSPLY{:/}
 tag | {::nomarkdown}ISSPLY{:/}
 routine | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISSPLY^[ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 Input parameters | {::nomarkdown}DLGID, QODLG{:/}
 First comment | {::nomarkdown}<pre> ORY=1: is "PSO SUPPLY" dialog</pre>{:/}
 Code | {::nomarkdown}  S ORY=""<br> Q:'$D(^ORD(101.41,DLGID,0))<br> I 'QODLG,($P(^ORD(101.41,DLGID,0),U)="PSO SUPPLY") S ORY=1<br> I QODLG D<br> . N SPLYDG S SPLYDG=$O(^ORD(100.98,"B","SPLY",0))<br> . I $P(^ORD(101.41,DLGID,0),U,5)=SPLYDG S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}