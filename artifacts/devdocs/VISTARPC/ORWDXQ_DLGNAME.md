---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXQ DLGNAME<br/>
# ORWDXQ DLGNAME

Return display name for a dialog.

## Properties

Property | Value
--- | ---
Label | DLGNAME
Routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DLGNAME^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Method Comment | Return display name for a dialog (DELETE??)
Input Parameters | INAME
Code | {::nomarkdown}<pre><code> N IEN S IEN=$O(^ORD(101.41,"B",INAME,0))<br/> S VAL=$P($G(^ORD(101.41,IEN,5)),U,4)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}