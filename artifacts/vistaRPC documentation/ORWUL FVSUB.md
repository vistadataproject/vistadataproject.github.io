---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL FVSUB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL FVSUB{:/}
 tag | {::nomarkdown}FVSUB{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FVSUB^[ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 Method comment | return subset of orders in view
 Input parameters | {::nomarkdown}IEN, FIRST, LAST{:/}
 Code | {::nomarkdown}  N I<br> F I=FIRST:1:LAST D<br> .;AGP change returned valued to returned data or @ if record does not<br> .;exist. The @ sign is used by the delphi code to identified a<br> .;non-existence record<br> .S LST(I)=$S($D(^ORD(101.44,IEN,20,$G(I)))>0:^ORD(101.44,IEN,20,I,0),1:"@"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}