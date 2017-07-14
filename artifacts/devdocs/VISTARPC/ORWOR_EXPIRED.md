---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWOR EXPIRED<br/>
# ORWOR EXPIRED

Returns the Fileman Date/Time to begin searching for expired orders.

## Properties

Property | Value
--- | ---
Label | EXPIRED
Routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [EXPIRED^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Method Comment | return FM date/time to begin search for expired orders
Code | {::nomarkdown}<pre><code> N HRS<br/> S HRS=$$GET^XPAR("ALL","ORWOR EXPIRED ORDERS",1,"I")<br/> S ORY=$$FMADD^XLFDT($$NOW^XLFDT,"","-"_HRS,"","")<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}