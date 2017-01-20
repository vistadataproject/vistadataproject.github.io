---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM3 ISUDQO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM3 ISUDQO{:/}
 tag | {::nomarkdown}ISUDQO{:/}
 routine | [ORWDXM3](http://code.osehra.org/dox/Routine_ORWDXM3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISUDQO^[ORWDXM3](http://code.osehra.org/dox/Routine_ORWDXM3_source.html)
 Method comment | True: is unit dose quick order
 Input parameters | {::nomarkdown}DLGID{:/}
 Code | {::nomarkdown}  S ORY=0<br> Q:'$D(^ORD(101.41,DLGID,0))<br> N CLODGRP,CLIVDGRP,UDGRP1,UDGRP2,DLGTYP,DLGGRP<br> S UDGRP1=$O(^ORD(100.98,"B","UD RX",0))<br> S UDGRP2=$O(^ORD(100.98,"B","I RX",0))<br> S CLODGRP=$O(^ORD(100.98,"B","CLINIC MEDICATIONS",""))<br> S CLIVDGRP=$O(^ORD(100.98,"B","CLINIC INFUSIONS",""))<br> S DLGTYP=$P($G(^ORD(101.41,DLGID,0)),U,4)<br> S DLGGRP=$P($G(^ORD(101.41,DLGID,0)),U,5)<br> I (DLGTYP="Q"),((DLGGRP=UDGRP1)!(DLGGRP=UDGRP2)!(DLGGRP=CLODGRP)!(DLGGRP=CLIVDGRP)) S ORY=1<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}