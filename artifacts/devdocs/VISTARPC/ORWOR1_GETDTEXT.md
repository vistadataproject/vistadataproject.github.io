---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWOR1 GETDTEXT
# ORWOR1 GETDTEXT

Returns the external text of an existing order.

Property | Value
--- | ---
Label | GETDTEXT
Routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDTEXT^ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
Method Comment | Get External Text
Input Parameters | ORDER
Code | {::nomarkdown}<pre><code> N IFN,ACTION<br/> S IFN=+ORDER,ACTION=$P(ORDER,";",2),I=0<br/> F  S I=$O(^OR(100,+IFN,8,+ACTION,.2,I)) Q:'I  S TEXT(I)=^(I,0)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}