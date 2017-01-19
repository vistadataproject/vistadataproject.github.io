---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 HASROUTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 HASROUTE{:/}
 tag | {::nomarkdown}HASROUTE{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | HASROUTE^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | Check if QO has a ROUTE defined
 Input parameters | {::nomarkdown}QOID{:/}
 Code | {::nomarkdown}  N ROUTID<br> S Y=0,ROUTID=0<br> S ROUTID=$O(^ORD(101.41,"B","OR GTX ROUTING",0))<br> Q:'ROUTID<br> Q:'$D(^ORD(101.41,+QOID))<br> I $D(^ORD(101.41,+QOID,6,"D",ROUTID)) S Y=1{:/}


### CPRS

[Orders/rODMeds.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}