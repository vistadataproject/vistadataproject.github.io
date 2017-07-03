---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS4 UPDTDG
# ORWDPS4 UPDTDG



Property | Value
--- | ---
Label | UPDTDG
Routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [UPDTDG^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Method Comment | Update Inpt order for outpatient DG to Inpt DG
Input Parameters | ORID
Code | {::nomarkdown}<pre><code> Q:'$D(^OR(100,+ORID,0))<br/> N UDDG<br/> S UDDG=$O(^ORD(100.98,"B","UD RX",0))<br/> S $P(^OR(100,+ORID,0),U,11)=UDDG</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}