---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORCHECK GETMONOL<br/>
# ORCHECK GETMONOL



## Properties

Property | Value
--- | ---
Label | GETMONOL
Routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETMONOL^ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
Method Comment | returns a list of monographs available for the orderchecks being presented to the user
Code | {::nomarkdown}<pre><code> Q:'$D(^TMP($J,"ORMONOGRAPH"))<br/> N I S I=0<br/> F  S I=$O(^TMP($J,"ORMONOGRAPH",I)) Q:'I  D<br/> .S ORY($G(^TMP($J,"ORMONOGRAPH",I,"INT")))=I_U_$G(^TMP($J,"ORMONOGRAPH",I,"INT"))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}