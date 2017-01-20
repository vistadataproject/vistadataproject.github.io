---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS5 LESGRP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS5 LESGRP{:/}
 tag | {::nomarkdown}LESGRP{:/}
 routine | [ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LESGRP^[ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
 Method comment | Return all of the orders' display groups LES checked
 First comment | {::nomarkdown}<pre>LES will check the orders belonging to the following display group<br/> 1.  LAB/LABORATORY  ORDERS<br/> 2.  BLOOD BANK      ORDERS<br/> 3.  CHEMISTRY       ORDERS</pre>{:/}
 Input parameters | {::nomarkdown}ORLES{:/}
 Code | {::nomarkdown}  N LABID,BLDBKID,CHMID<br> S (LABID,BLDBKID,CHMID,ORY)=0<br> S:$D(^ORD(100.98,"B","LAB")) LABID=$O(^ORD(100.98,"B","LAB",0))<br> I 'LABID S:$D(^ORD(100.98,"B","LABORATORY")) LABID=$O(^ORD(100.98,"B","LABORATORY",0))<br> S:$D(^ORD(100.98,"B","BLOOD BANK")) BLDBKID=$O(^ORD(100.98,"B","BLOOD BANK",0))<br> S:$D(^ORD(100.98,"B","CHEMISTRY")) CHMID=$O(^ORD(100.98,"B","CHEMISTRY",0))<br> I ('LABID)!('BLDBKID!('CHMID)) Q<br> S ORY=LABID_U_BLDBKID_U_CHMID{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}