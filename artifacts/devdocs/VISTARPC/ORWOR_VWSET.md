---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWOR VWSET<br/>
# ORWOR VWSET

Sets the default view on the orders tab for the user.

## Properties

Property | Value
--- | ---
Label | VWSET
MUMPS Implementation | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VWSET^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Method Comment | Set the preferred view for orders
Input Parameters | VIEW
First Comment | {::nomarkdown}<pre><code> VIEW:  semi-colon delimited record<br/>        1 - Relative From Date/Time or ""<br/>        2 - Relative Thru Date/Time or ""<br/>        3 - Filter<br/>        4 - Display Group Pointer<br/>        5 - Format (preserve for list manager)<br/>        6 - chronological display (R or F)<br/>        7 - sort by display group</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N FMT<br/> S $P(VIEW,";",4)=$P($G(^ORD(100.98,+$P(VIEW,";",4),0)),U,3)<br/> S FMT=$P($$GET^XPAR("ALL","ORCH CONTEXT ORDERS",1,"I"),";",5)<br/> S:'$L(FMT) FMT="L" S $P(VIEW,";",5)=FMT<br/> D EN^XPAR(DUZ_";VA(200,","ORCH CONTEXT ORDERS",1,VIEW,.ORERR)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}