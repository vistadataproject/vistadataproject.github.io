---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OREVNTX1 CPACT
# OREVNTX1 CPACT



Property | Value
--- | ---
Label | CPACT
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CPACT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return True/False to display active orders for copy
Input Parameters | EVT
First Comment | {::nomarkdown}<pre><code> EVT ptr to #100.5</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'EVT<br/> S ORY=0<br/> Q:'$D(^ORD(100.5,EVT,0))<br/> S ORY=$P(^ORD(100.5,EVT,0),U,11)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}