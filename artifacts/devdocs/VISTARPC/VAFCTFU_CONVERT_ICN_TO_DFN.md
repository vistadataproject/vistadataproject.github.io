---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VAFCTFU CONVERT ICN TO DFN<br/>
# VAFCTFU CONVERT ICN TO DFN

Given a patient Integration Control Number (ICN), this will returnthe patient Internal Entry Number (IEN) from the PATIENT file (#2).

## Properties

Property | Value
--- | ---
Label | GETDFN
MUMPS Implementation | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ICN | LITERAL | 255 | true | Patient Integration Control Number (ICN).



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETDFN^VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
Input Parameters | ICN
Code | {::nomarkdown}<pre><code> S RESULT=$$GETDFN^MPIF001(ICN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}