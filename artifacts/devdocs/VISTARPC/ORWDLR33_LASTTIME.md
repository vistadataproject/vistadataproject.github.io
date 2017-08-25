---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR33 LASTTIME<br/>
# ORWDLR33 LASTTIME

When entering quick orders from an order menu, the ^TMP("ORECALL",$J)array contains the last responses entered.  This RPC allows retrieval ofthe previous order's collection time from that array.

## Properties

Property | Value
--- | ---
Label | LASTTIME
MUMPS Implementation | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [LASTTIME^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Method Comment | Get last collection time used from ^TMP(&quot;ORECALL&quot;,$J) array
Code | {::nomarkdown}<pre><code> N ORDIALOG,ORTYPE,ORTIME<br/> S ORDIALOG=$O(^ORD(101.41,"B","LR OTHER LAB TESTS",0))<br/> S ORTYPE=$O(^ORD(101.41,"B","OR GTX COLLECTION TYPE",0))<br/> S ORTIME=$O(^ORD(101.41,"B","OR GTX START DATE/TIME",0))<br/> S ORY=$$RECALL^ORCD(ORTYPE,1)_U_$$RECALL^ORCD(ORTIME,1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}