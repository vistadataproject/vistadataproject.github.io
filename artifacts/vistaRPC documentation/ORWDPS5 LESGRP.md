---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS5 LESGRP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS5 LESGRP{:/}
 tag | {::nomarkdown}LESGRP{:/}
 routine | [ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return all of the orders' display groups LES checked
 Input Parameters | {::nomarkdown}ORLES{:/}
 Lines | ```
 N LABID,BLDBKID,CHMID
 S (LABID,BLDBKID,CHMID,ORY)=0
 S:$D(^ORD(100.98,"B","LAB")) LABID=$O(^ORD(100.98,"B","LAB",0))
 I 'LABID S:$D(^ORD(100.98,"B","LABORATORY")) LABID=$O(^ORD(100.98,"B","LABORATORY",0))
 S:$D(^ORD(100.98,"B","BLOOD BANK")) BLDBKID=$O(^ORD(100.98,"B","BLOOD BANK",0))
 S:$D(^ORD(100.98,"B","CHEMISTRY")) CHMID=$O(^ORD(100.98,"B","CHEMISTRY",0))
 I ('LABID)!('BLDBKID!('CHMID)) Q
 S ORY=LABID_U_BLDBKID_U_CHMID```
 Leading comment lines | {::nomarkdown}LES will check the orders belonging to the following display group<br/>1.  LAB/LABORATORY  ORDERS<br/>2.  BLOOD BANK      ORDERS<br/>3.  CHEMISTRY       ORDERS{:/}




 Generated on January 13th 2017, 6:55:29 am