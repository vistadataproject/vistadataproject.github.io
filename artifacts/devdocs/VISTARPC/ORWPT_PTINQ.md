---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT PTINQ<br/>
# ORWPT PTINQ

Returns formatted patient inquiry text for display in GUI environment.

## Properties

Property | Value
--- | ---
Label | PTINQ
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PTINQ^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return formatted pt inquiry report
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> K ^TMP("ORDATA",$J,1)<br/> D DGINQ^ORCXPND1(DFN)<br/> S REF=$NA(^TMP("ORDATA",$J,1))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}