---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 HASOIPI 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 HASOIPI{:/}
 tag | {::nomarkdown}HASOIPI{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HASOIPI^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | Check if QO put orderable item's PI into Sig
 Input parameters | {::nomarkdown}QOID{:/}
 Code | {::nomarkdown}  N PIIEN,OIX<br> S Y=0<br> Q:'$D(^ORD(101.41,QOID,0))<br> S PIIEN=$O(^ORD(101.41,"B","OR GTX PATIENT INSTRUCTIONS",0))<br> Q:'PIIEN<br> S OIX=0<br> Q:'$D(^ORD(101.41,QOID,6,"D"))<br> F  S OIX=$O(^ORD(101.41,+QOID,6,"D",OIX)) Q:'OIX  D<br> . I OIX=PIIEN S Y=1 Q{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}