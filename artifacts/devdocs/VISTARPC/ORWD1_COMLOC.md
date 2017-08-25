---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD1 COMLOC<br/>
# ORWD1 COMLOC

Returns true if all orders in a list have a common ordering location.

## Properties

Property | Value
--- | ---
Label | COMLOC
MUMPS Implementation | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [COMLOC^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Method Comment | Return common location for orders in list, if any
Input Parameters | ORDERS
Code | {::nomarkdown}<pre><code> N I<br/> S LOC=0,I=0<br/> F  S I=$O(ORDERS(I)) Q:'I  D  Q:LOC<br/> . I $P(ORDERS(I),U,2)'["R",($P(ORDERS(I),U,2)'["S") Q<br/> . S LOC=+$P($G(^OR(100,+ORDERS(I),0)),U,10)<br/> I LOC F  S I=$O(ORDERS(I)) Q:'I  D  Q:'LOC<br/> . I $P(ORDERS(I),U,2)'["R",($P(ORDERS(I),U,2)'["S") Q<br/> . I (+$P($G(^OR(100,+ORDERS(I),0)),U,10)'=LOC) S LOC=0</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}