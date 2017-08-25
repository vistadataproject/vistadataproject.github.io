---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXC ON<br/>
# ORWDXC ON

Returns E if order checking enabled, otherwise D.

## Properties

Property | Value
--- | ---
Label | ON
MUMPS Implementation | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ON^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Method Comment | returns E if order checking enabled, otherwise D
Code | {::nomarkdown}<pre><code> S VAL=$$GET^XPAR("DIV^SYS^PKG","ORK SYSTEM ENABLE/DISABLE")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}