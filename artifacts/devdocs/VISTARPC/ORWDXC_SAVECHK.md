---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXC SAVECHK<br/>
# ORWDXC SAVECHK

Save order checks for session.

## Properties

Property | Value
--- | ---
Label | SAVECHK
Routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SAVECHK^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Method Comment | Save order checks for session
Input Parameters | ORVP, RSN, LST
Code | {::nomarkdown}<pre><code> N ORCHECK,ORIFN S OK=1<br/> D LST2CHK<br/> I $L(RSN)>0 S ORCHECK("OK")=RSN<br/> S ORIFN=0 F  S ORIFN=$O(ORCHECK(ORIFN)) Q:'ORIFN  D OC^ORCSAVE2</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}