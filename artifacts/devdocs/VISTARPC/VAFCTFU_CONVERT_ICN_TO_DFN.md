---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VAFCTFU CONVERT ICN TO DFN
# VAFCTFU CONVERT ICN TO DFN

Given a patient Integration Control Number (ICN), this will returnthe patient Internal Entry Number (IEN) from the PATIENT file (#2).

Property | Value
--- | ---
Label | GETDFN
Routine | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ICN | LITERAL | 255 | true | Patient Integration Control Number (ICN).



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDFN^VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
Input Parameters | ICN
Code | {::nomarkdown}<pre><code> S RESULT=$$GETDFN^MPIF001(ICN)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}