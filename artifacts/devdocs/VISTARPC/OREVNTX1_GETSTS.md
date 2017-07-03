---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OREVNTX1 GETSTS
# OREVNTX1 GETSTS



Property | Value
--- | ---
Label | GETSTS
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETSTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return Order status
Input Parameters | ORDID
Code | {::nomarkdown}<pre><code> Q:'+ORDID<br/> Q:'$D(^OR(100,+ORDID,0))<br/> S ORY=$P($G(^OR(100,+ORDID,3)),U,3)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}