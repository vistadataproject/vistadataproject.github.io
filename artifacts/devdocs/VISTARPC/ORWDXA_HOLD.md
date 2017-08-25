---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA HOLD<br/>
# ORWDXA HOLD

RPC to place an existing order on hold.

## Properties

Property | Value
--- | ---
Label | HOLD
MUMPS Implementation | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [HOLD^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Place order on hold
Input Parameters | ORID, ORNP
Code | {::nomarkdown}<pre><code> N ACTDA<br/> S ACTDA=$$ACTION^ORCSAVE("HD",+ORID,ORNP)<br/> D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}