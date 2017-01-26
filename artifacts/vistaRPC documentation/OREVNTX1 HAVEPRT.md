---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 HAVEPRT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 HAVEPRT{:/}
 tag | {::nomarkdown}HAVEPRT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HAVEPRT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | return parent patient event from #100.2
 Input parameters | {::nomarkdown}PTEVT{:/}
 Code | {::nomarkdown}  Q:'+PTEVT<br> S ORY=""<br> S:$L($G(^ORE(100.2,PTEVT,1))) ORY=$P(^(1),U,5){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}