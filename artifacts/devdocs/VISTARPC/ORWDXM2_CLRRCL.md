---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXM2 CLRRCL<br/>
# ORWDXM2 CLRRCL

Clear ORECALL.  Used by CPRS GUI to clean up ^TMP("ORECALL",$J) and^TMP("ORWDXMQ",$J).

## Properties

Property | Value
--- | ---
Label | CLRRCL
Routine | [ORWDXM2](http://code.osehra.org/dox/Routine_ORWDXM2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CLRRCL^ORWDXM2](http://code.osehra.org/dox/Routine_ORWDXM2_source.html)
Method Comment | clear ORECALL
Code | {::nomarkdown}<pre><code> S OK=1<br/> K ^TMP("ORECALL",$J),^TMP("ORWDXMQ",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}