---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM GEC STATUS PROMPT<br/>
# ORQQPXRM GEC STATUS PROMPT

This remote procedure will return the text value to display in CPRS of the status of the current GEC Referral.

## Properties

Property | Value
--- | ---
Label | GECP
MUMPS Implementation | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [GECP^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> S RESULT=$$STATUS^PXRMGECU(DFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fFrame.pas">fFrame.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}