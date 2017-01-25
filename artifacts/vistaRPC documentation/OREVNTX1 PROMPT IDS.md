---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 PROMPT IDS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 PROMPT IDS{:/}
 tag | {::nomarkdown}PRTIDS{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PRTIDS^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return some prompt ids from #101.41
 Input parameters | {::nomarkdown}IDS{:/}
 First comment | {::nomarkdown}<pre> treating specialty Id^attending provider id</pre>{:/}
 Code | {::nomarkdown}  N IDX,ORTS,ORATT<br> S (ORY,ORTS,ORATT)=""<br> S IDX=$O(^ORD(101.41,"B","OR GTX TREATING SPECIALTY",0))<br> S:$D(^ORD(101.41,IDX,1)) ORTS=$P($G(^ORD(101.41,IDX,1)),U,2,3)<br> S IDX=$O(^ORD(101.41,"B","OR GTX PROVIDER",0))<br> S:$D(^ORD(101.41,IDX,1)) ORATT=$P($G(^ORD(101.41,IDX,1)),U,2,3)<br> S ORY=ORTS_"~"_ORATT{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}