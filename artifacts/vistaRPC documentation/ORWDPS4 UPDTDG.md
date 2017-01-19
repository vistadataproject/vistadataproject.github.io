---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS4 UPDTDG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 UPDTDG{:/}
 tag | {::nomarkdown}UPDTDG{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | UPDTDG^[ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 Method comment | Update Inpt order for outpatient DG to Inpt DG
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  Q:'$D(^OR(100,+ORID,0))<br> N UDDG<br> S UDDG=$O(^ORD(100.98,"B","UD RX",0))<br> S $P(^OR(100,+ORID,0),U,11)=UDDG{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}