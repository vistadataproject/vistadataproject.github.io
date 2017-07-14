---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA FLAG<br/>
# ORWDXA FLAG

Flag an existing order.

## Properties

Property | Value
--- | ---
Label | FLAG
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [FLAG^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Flag order
Input Parameters | ORIFN, OREASON, ORNP
Code | {::nomarkdown}<pre><code> N ORB,ORVP,DA,ORPS<br/> D BULLETIN<br/> S DA=$P(ORIFN,";",2),ORVP=+$P(^OR(100,+ORIFN,0),U,2)<br/> K ^OR(100,+ORIFN,8,DA,3) S ^(3)="1^"_$G(XMZ)_U_+$E($$NOW^XLFDT,1,12)_U_DUZ_U_OREASON_$S($G(ORNP):"^^^^"_+ORNP,1:"")<br/> D KILL^XM,MSG^ORCFLAG(ORIFN)<br/> S $P(^OR(100,+ORIFN,3),U)=$$NOW^XLFDT ; Last Activity<br/> I +$G(ORNP)<1 S ORNP=+$P($G(^OR(100,+ORIFN,8,DA,0)),U,3)<br/> S ORB=+ORVP_U_+ORIFN_U_ORNP_"^1" D EN^OCXOERR(ORB) ; notification<br/> D GETBYIFN^ORWORR(.REC,ORIFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}