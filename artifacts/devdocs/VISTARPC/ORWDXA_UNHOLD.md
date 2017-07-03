---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXA UNHOLD
# ORWDXA UNHOLD

RPC to remove a particular order from hold status.

Property | Value
--- | ---
Label | UNHOLD
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [UNHOLD^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Release order from hold
Input Parameters | ORID, ORNP
Code | {::nomarkdown}<pre><code> N ACTDA<br/> S ACTDA=$$ACTION^ORCSAVE("RL",+ORID,ORNP)<br/> D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}