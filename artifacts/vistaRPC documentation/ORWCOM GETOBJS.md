---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCOM GETOBJS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCOM GETOBJS{:/}
 tag | {::nomarkdown}GETOBJS{:/}
 routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of all active COM objects{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETOBJS^[ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 Method comment | Returns list of all active COM objects
 Code | {::nomarkdown}  N I,J,IDX,NODE<br> S I="",IDX=0<br> F  S I=$O(^ORD(101.15,"B",I)) Q:I=""  D<br> .S J=$O(^ORD(101.15,"B",I,0)) Q:'+J<br> .S NODE=$G(^ORD(101.15,J,0))<br> .I $P(NODE,U,3)'="I" D<br> ..S IDX=IDX+1<br> ..S ORY(IDX)=J_U_NODE<br>{:/}


### CPRS

[rEventHooks.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rEventHooks.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}