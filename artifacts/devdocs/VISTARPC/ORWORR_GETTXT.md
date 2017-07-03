---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWORR GETTXT
# ORWORR GETTXT

Returns the text of an existing order.

Property | Value
--- | ---
Label | GETTXT
Routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETTXT^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
Method Comment | get text of an order
Input Parameters | IFN
Code | {::nomarkdown}<pre><code> I $L(IFN,";")=1 S IFN=IFN_";1"<br/> D TEXT^ORQ12(.LST,IFN,255)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}