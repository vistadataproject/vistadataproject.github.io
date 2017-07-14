---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXR GTORITM<br/>
# ORWDXR GTORITM



## Properties

Property | Value
--- | ---
Label | GTORITM
Routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GTORITM^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Method Comment | Get back the orderable item IEN
Input Parameters | ORIFN
Code | {::nomarkdown}<pre><code> S ORIFN=+ORIFN<br/> S Y=$$VALUE^ORCSAVE2(ORIFN,"ORDERABLE")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}