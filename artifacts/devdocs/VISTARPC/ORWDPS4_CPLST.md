---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS4 CPLST
# ORWDPS4 CPLST

Get co-pay ralated questions

Property | Value
--- | ---
Label | CPLST
Routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [CPLST^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Method Comment | Get CP questions
Input Parameters | PTIFN, ORIFNS
Code | {::nomarkdown}<pre><code> N ORIFN,ORDA,ORI,ORPSO,CPX<br/> S ORI=0,ORPSO=+$O(^DIC(9.4,"C","PSO",0))<br/> F  S ORI=$O(ORIFNS(ORI)) Q:'ORI  D<br/> .S ORIFN=+ORIFNS(ORI),ORDA=$P(ORIFNS(ORI),";",2)<br/> .I $D(^OR(100,ORIFN,0)),($P(^OR(100,ORIFN,0),U,14)=ORPSO) D<br/> ..N PRIO S PRIO=0<br/> ..I $D(^OR(100,ORIFN,4.5,"ID","URGENCY")) S PRIO=$O(^("URGENCY",0))<br/> ..S PRIO=$G(^OR(100,ORIFN,4.5,+PRIO,1))<br/> ..Q:PRIO=99<br/> ..S CPX=$$SC(ORIFN)<br/> ..I $L(CPX)>1 S TEST(ORIFN)=ORIFN_";"_ORDA_CPX<br/> K PTIFN,ORIFN,ORDA,ORI,CPX</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}