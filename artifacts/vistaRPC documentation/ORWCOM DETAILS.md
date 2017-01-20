---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCOM DETAILS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCOM DETAILS{:/}
 tag | {::nomarkdown}DETAILS{:/}
 routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns details of COM object when passed in COM IEN.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DETAILS^[ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 Method comment | Returns Details about a specific COM Object
 Input parameters | {::nomarkdown}ID{:/}
 Code | {::nomarkdown}  N NODE<br> S ORY=0<br> I +ID D<br> .S NODE=$G(^ORD(101.15,+ID,0))<br> .I NODE'="",$P(NODE,U,3)'="I" S ORY=ID_U_NODE{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rEventHooks.pas">rEventHooks.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}