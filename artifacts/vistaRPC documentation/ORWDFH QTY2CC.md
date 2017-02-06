---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH QTY2CC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH QTY2CC{:/}
 tag | {::nomarkdown}QTY2CC{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns cc's given a product, strength, and quantity.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | QTY2CC^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return cc's given a product, strength, & quantity
 Input parameters | {::nomarkdown}PRD, STR, QTY{:/}
 Code | {::nomarkdown}  N X,VQTY,DUR<br> S VQTY=$$VALIDQTY^ORCDFHTF(QTY) I '$L(VQTY)!('PRD)!('STR) S VAL="" Q<br> S PRD=+$P($G(^ORD(101.43,PRD,0)),U,2)<br> S DUR=$P(VQTY," X ",2) I $L(DUR) S DUR=$S(DUR["H":"H",1:"X")_+DUR<br> S X=+VQTY_"&"_$E($P(VQTY," ",2))_U_$P($P(VQTY,"/",2)," ")_U_DUR<br> S VAL=$$QUAN^FHWOR5R(PRD_"-"_STR,X)_U_VQTY{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}