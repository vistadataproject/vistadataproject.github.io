---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXA UNFLAG
# ORWDXA UNFLAG

Unflag an existing order.

Property | Value
--- | ---
Label | UNFLAG
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [UNFLAG^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Unflag order
Input Parameters | ORIFN, OREASON
Code | {::nomarkdown}<pre><code> N DA,ORB,ORNP,ORVP,ORPS<br/> S DA=$P(ORIFN,";",2),ORVP=+$P(^OR(100,+ORIFN,0),U,2)<br/> S $P(^OR(100,+ORIFN,8,DA,3),U)=0,$P(^(3),U,6,8)=+$E($$NOW^XLFDT,1,12)_U_DUZ_U_OREASON D MSG^ORCFLAG(ORIFN)<br/> S $P(^OR(100,+ORIFN,3),U)=$$NOW^XLFDT  ; Last Activity<br/> S ORNP=+$P($G(^OR(100,+ORIFN,8,DA,0)),U,3)<br/> S ORB=+ORVP_U_+ORIFN_U_ORNP_"^0" D EN^OCXOERR(ORB) ; notification<br/> D GETBYIFN^ORWORR(.REC,ORIFN)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}