---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS5 LESGRP<br/>
# ORWDPS5 LESGRP



## Properties

Property | Value
--- | ---
Label | LESGRP
Routine | [ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [LESGRP^ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
Method Comment | Return all of the orders&#x27; display groups LES checked
Input Parameters | ORLES
First Comment | {::nomarkdown}<pre><code>LES will check the orders belonging to the following display group<br/> 1.  LAB/LABORATORY  ORDERS<br/> 2.  BLOOD BANK      ORDERS<br/> 3.  CHEMISTRY       ORDERS</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N LABID,BLDBKID,CHMID<br/> S (LABID,BLDBKID,CHMID,ORY)=0<br/> S:$D(^ORD(100.98,"B","LAB")) LABID=$O(^ORD(100.98,"B","LAB",0))<br/> I 'LABID S:$D(^ORD(100.98,"B","LABORATORY")) LABID=$O(^ORD(100.98,"B","LABORATORY",0))<br/> S:$D(^ORD(100.98,"B","BLOOD BANK")) BLDBKID=$O(^ORD(100.98,"B","BLOOD BANK",0))<br/> S:$D(^ORD(100.98,"B","CHEMISTRY")) CHMID=$O(^ORD(100.98,"B","CHEMISTRY",0))<br/> I ('LABID)!('BLDBKID!('CHMID)) Q<br/> S ORY=LABID_U_BLDBKID_U_CHMID</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}