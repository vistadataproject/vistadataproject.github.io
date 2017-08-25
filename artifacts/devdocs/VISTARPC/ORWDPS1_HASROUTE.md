---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS1 HASROUTE<br/>
# ORWDPS1 HASROUTE



## Properties

Property | Value
--- | ---
Label | HASROUTE
MUMPS Implementation | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [HASROUTE^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | Check if QO has a ROUTE defined
Input Parameters | QOID
Code | {::nomarkdown}<pre><code> N ROUTID<br/> S Y=0,ROUTID=0<br/> S ROUTID=$O(^ORD(101.41,"B","OR GTX ROUTING",0))<br/> Q:'ROUTID<br/> Q:'$D(^ORD(101.41,+QOID))<br/> I $D(^ORD(101.41,+QOID,6,"D",ROUTID)) S Y=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}