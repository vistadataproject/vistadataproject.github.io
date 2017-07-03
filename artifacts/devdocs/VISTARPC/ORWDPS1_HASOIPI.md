---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS1 HASOIPI
# ORWDPS1 HASOIPI



Property | Value
--- | ---
Label | HASOIPI
Routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [HASOIPI^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | Check if QO put orderable item&#x27;s PI into Sig
Input Parameters | QOID
Code | {::nomarkdown}<pre><code> N PIIEN,OIX<br/> S Y=0<br/> Q:'$D(^ORD(101.41,QOID,0))<br/> S PIIEN=$O(^ORD(101.41,"B","OR GTX PATIENT INSTRUCTIONS",0))<br/> Q:'PIIEN<br/> S OIX=0<br/> Q:'$D(^ORD(101.41,QOID,6,"D"))<br/> F  S OIX=$O(^ORD(101.41,+QOID,6,"D",OIX)) Q:'OIX  D<br/> . I OIX=PIIEN S Y=1 Q</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}