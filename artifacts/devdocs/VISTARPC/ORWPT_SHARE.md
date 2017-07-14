---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT SHARE<br/>
# ORWPT SHARE



## Properties

Property | Value
--- | ---
Label | SHARE
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SHARE^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Set global to share DFN with other applications
Input Parameters | IP, HWND, DFN
Code | {::nomarkdown}<pre><code> K ^TMP("ORWCHART",$J),^TMP("ORECALL",$J),^TMP("ORWORD",$J)<br/> K ^TMP("ORWDXMQ",$J)<br/> S ^TMP("ORWCHART",$J,IP,HWND)=DFN</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}