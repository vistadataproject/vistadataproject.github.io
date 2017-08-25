---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXC SESSION<br/>
# ORWDXC SESSION

Return list of order checks on release of order.

## Properties

Property | Value
--- | ---
Label | SESSION
MUMPS Implementation | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SESSION^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Method Comment | Return list of Order Checks on Release Order
Input Parameters | ORVP, ORLST
Code | {::nomarkdown}<pre><code> K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD")<br/> N ORES,ORCHECK<br/> S ORVP=+ORVP_";DPT("<br/> S I=0 F  S I=$O(ORLST(I)) Q:'I  D<br/> . I +$P(ORLST(I),";",2)'=1 Q  ; order not new<br/> . I $P(ORLST(I),U,3)="0" Q    ; order not being released<br/> . S ORES($P(ORLST(I),U))=""<br/> D SESSION^ORCHECK<br/> D OPOS(+ORVP)<br/> D CHK2LST<br/> D CHECKIT(.LST)<br/> K ^TMP($J,"OROCOUTO;"),^TMP($J,"OROCOUTI;"),^TMP($J,"DD")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}