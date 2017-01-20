---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS4 IPOD4OP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 IPOD4OP{:/}
 tag | {::nomarkdown}IPOD4OP{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | IPOD4OP^[ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 Method comment | True: is an Inpt (IV OI) order on an OutPatient
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  Q:'$D(^OR(100,+ORID,0))<br> S ORY=0<br> N APKG,ADLG,ADG,APTCLS,RXDG,UDDLG,IPPKG<br> S (RXDG,UDDLG,IPPKG)=0<br> S RXDG=+$O(^ORD(100.98,"B","O RX",0))<br> S UDDLG=+$O(^ORD(101.41,"B","PSJ OR PAT OE",0))<br> S IPPKG=+$O(^DIC(9.4,"B","INPATIENT MEDICATIONS",0))<br> S ADLG=+$P($G(^OR(100,+ORID,0)),U,5)<br> S ADG=$P($G(^OR(100,+ORID,0)),U,11)<br> S APKG=$P($G(^OR(100,+ORID,0)),U,14)<br> S APTCLS=$P($G(^OR(100,+ORID,0)),U,12)<br> I ADG=RXDG,(ADLG=UDDLG),(APKG=IPPKG),(APTCLS="I") S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}