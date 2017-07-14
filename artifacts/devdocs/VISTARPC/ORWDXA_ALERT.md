---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA ALERT<br/>
# ORWDXA ALERT

Set order to send an alert when the order is resulted.

## Properties

Property | Value
--- | ---
Label | ALERT
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ALERT^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | alert user (ORDUZ) when order (ORID) resulted
Input Parameters | ORID, ORDUZ
First Comment | {::nomarkdown}<pre><code>if no user passed, use ordering provider:</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I $G(ORDUZ)<1 S ORDUZ=+$$ORDERER^ORQOR2(+ORID)<br/> I $L($G(ORDUZ))<1 S ORDUZ=DUZ<br/> S DUMMY=1,$P(^OR(100,+ORID,3),U,10)=ORDUZ</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}