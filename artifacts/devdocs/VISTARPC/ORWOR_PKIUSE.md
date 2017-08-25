---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWOR PKIUSE<br/>
# ORWOR PKIUSE



## Properties

Property | Value
--- | ---
Label | PKIUSE
MUMPS Implementation | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PKIUSE^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Method Comment | RPC determines user can use PKI Digital Signature
Code | {::nomarkdown}<pre><code> N ORPKIU<br/> S RETURN=0<br/> S ORPKIU=0 I $D(^ORD(100.7,"C",DUZ)) S ORPKIU=1<br/> I ORPKIU S RETURN=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}