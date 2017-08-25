---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB DEFERRED CLEARALL<br/>
# XWB DEFERRED CLEARALL

This RPC is used to CLEAR all the data known to this job in the ^XTMPglobal.  Makes use of the list in ^TMP("XWBHDL",$J,handle).

## Properties

Property | Value
--- | ---
Label | CLEARALL
MUMPS Implementation | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [CLEARALL^XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
Method Comment | Clear ALL the data for this job.
Code | {::nomarkdown}<pre><code> N X<br/> S X="" F  S X=$O(^TMP("XWBHDL",$J,X)) Q:X=""  D CLEAR(.RET,X)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}