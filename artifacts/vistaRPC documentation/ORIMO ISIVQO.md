---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORIMO ISIVQO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORIMO ISIVQO{:/}
 tag | {::nomarkdown}ISIVQO{:/}
 routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISIVQO^[ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 Method comment | Is it an IV quick order
 Input parameters | {::nomarkdown}DLGID{:/}
 Code | {::nomarkdown}  S ORY=0<br> Q:'$D(^ORD(101.41,DLGID,0))<br> N IVGRP,DLGTYP,DLGGRP<br> S IVGRP=$O(^ORD(100.98,"B","IV RX",0))<br> S DLGTYP=$P($G(^ORD(101.41,DLGID,0)),U,4)<br> S DLGGRP=$P($G(^ORD(101.41,DLGID,0)),U,5)<br> I (DLGTYP="Q"),(DLGGRP=IVGRP) S ORY=1<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}