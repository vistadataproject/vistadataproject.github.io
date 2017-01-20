---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS4 CPLST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 CPLST{:/}
 tag | {::nomarkdown}CPLST{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get co-pay ralated questions{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CPLST^[ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 Method comment | Get CP questions
 Input parameters | {::nomarkdown}PTIFN<br>ORIFNS{:/}
 Code | {::nomarkdown}  N ORIFN,ORDA,ORI,ORPSO,CPX<br> S ORI=0,ORPSO=+$O(^DIC(9.4,"C","PSO",0))<br> F  S ORI=$O(ORIFNS(ORI)) Q:'ORI  D<br> .S ORIFN=+ORIFNS(ORI),ORDA=$P(ORIFNS(ORI),";",2)<br> .I $D(^OR(100,ORIFN,0)),($P(^OR(100,ORIFN,0),U,14)=ORPSO) D<br> ..N PRIO S PRIO=0<br> ..I $D(^OR(100,ORIFN,4.5,"ID","URGENCY")) S PRIO=$O(^("URGENCY",0))<br> ..S PRIO=$G(^OR(100,ORIFN,4.5,+PRIO,1))<br> ..Q:PRIO=99<br> ..S CPX=$$SC(ORIFN)<br> ..I $L(CPX)>1 S TEST(ORIFN)=ORIFN_";"_ORDA_CPX<br> K PTIFN,ORIFN,ORDA,ORI,CPX{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rODBase.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas)
 [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}