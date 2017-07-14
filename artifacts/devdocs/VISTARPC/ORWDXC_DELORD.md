---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXC DELORD<br/>
# ORWDXC DELORD

Delete order.

## Properties

Property | Value
--- | ---
Label | DELORD
Routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DELORD^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Method Comment | Delete order
Input Parameters | ORIFN
Code | {::nomarkdown}<pre><code> N STS,DIK,DA<br/> S STS=$P(^OR(100,+ORIFN,8,1,0),U,15),OK=0<br/> I (STS=10)!(STS=11) D  Q  ; makes sure it's an unreleased order<br/> . ;*400 - Delete unused replacement order<br/> . N OLDIFN,DA,DIE,DR S OLDIFN=$P(^OR(100,+ORIFN,3),U,5) I $G(OLDIFN) D<br/> . . S DA=+OLDIFN,DIE="^OR(100,",DR="9.1///@"<br/> . . D ^DIE K DA,DIE,DR<br/> . S DA=+ORIFN,DIK="^OR(100," Q:'DA<br/> . D ^DIK<br/> . S OK=1<br/> . D DELETE^OROCAPI1(+ORIFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}