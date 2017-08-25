---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA FLAGTXT<br/>
# ORWDXA FLAGTXT

Return text associated with a particular flagged order (reason for flag).

## Properties

Property | Value
--- | ---
Label | FLAGTXT
MUMPS Implementation | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [FLAGTXT^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | flag reason
Input Parameters | ORID
Code | {::nomarkdown}<pre><code> N FLAG<br/> S FLAG=$G(^OR(100,+ORID,8,$P(ORID,";",2),3))<br/> S LST(1)="FLAGGED: "_$$FMTE^XLFDT($P(FLAG,U,3))_" by "_$P($G(^VA(200,+$P(FLAG,U,4),0)),U)<br/> S LST(2)=$P(FLAG,U,5) ; reason</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}