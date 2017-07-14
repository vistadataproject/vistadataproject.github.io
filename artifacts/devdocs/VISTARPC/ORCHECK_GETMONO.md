---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORCHECK GETMONO<br/>
# ORCHECK GETMONO



## Properties

Property | Value
--- | ---
Label | GETMONO
Routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETMONO^ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
Method Comment | return a monograph
Input Parameters | ORMONO
Code | {::nomarkdown}<pre><code> Q:'$D(^TMP($J,"ORMONOGRAPH",ORMONO))<br/> K ^TMP($J,"ORMONORPC")<br/> M ^TMP($J,"ORMONORPC")=^TMP($J,"ORMONOGRAPH",ORMONO,"DATA")<br/> K ^TMP($J,"ORMONORPC",0)<br/> S ORY=$NA(^TMP($J,"ORMONORPC")),@ORY=""</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}