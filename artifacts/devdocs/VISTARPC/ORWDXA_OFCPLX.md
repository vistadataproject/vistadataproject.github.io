---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA OFCPLX<br/>
# ORWDXA OFCPLX



## Properties

Property | Value
--- | ---
Label | OFCPLX
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [OFCPLX^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | is ORID child of PRTORDER
Input Parameters | ORID, PRTORDER
Code | {::nomarkdown}<pre><code> N NUMCHDS,NOWID,NOWVAL,X3,ORDA,ISNOW<br/> Q:'$D(^OR(100,+ORID,0))<br/> S ISNOW=0<br/> D ISNOW^ORWDXR(.ISNOW,+ORID)<br/> Q:ISNOW<br/> N PKG<br/> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br/> S PKG=$$NMSP^ORCD(PKG)<br/> I PKG'="PS" Q<br/> I $L($G(^OR(100,+ORID,3))),('$L($P(^(3),U,9))) Q<br/> S (NUMCHDS,NOWID,NOWVAL,X3,ORDA)=0<br/> S PRTORDER=+$P(^(3),U,9)<br/> S X3=$G(^OR(100,PRTORDER,3)),ORDA=$P(X3,U,7)<br/> S PRTORDER=PRTORDER_";"_ORDA<br/> S NUMCHDS=$P($G(^OR(100,+PRTORDER,2,0)),U,4)<br/> I NUMCHDS>2 S ORY="COMPLEX-PSI"_U_PRTORDER<br/> S:$D(^OR(100,+PRTORDER,4.5,"ID","NOW")) NOWID=$O(^("NOW",0))<br/> S:NOWID NOWVAL=$G(^OR(100,+PRTORDER,4.5,NOWID,1))<br/> I NOWVAL=1 Q<br/> E  S ORY="COMPLEX-PSI"_U_PRTORDER</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}