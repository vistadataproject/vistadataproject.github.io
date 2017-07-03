---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORPRF TRIGGER POPUP
# ORPRF TRIGGER POPUP

Returns 1 if popup flag display should be triggered for given patient uponpatient selection. If not, returns 0. Does not require clean-up aftercalling it since it does not set arrays or globals.

Property | Value
--- | ---
Label | TRIGRPOP
Routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PTDFN | LITERAL |  | true | IEN in Patient file of given patient.



### MUMPS Method Description

Property | Value
--- | ---
Method | [TRIGRPOP^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
Method Comment | Should the flag display pop up upon patient selection
Input Parameters | PTDFN
First Comment | {::nomarkdown}<pre><code> for patient PTDFN?<br/>As of 1/10/06, returns POPUP as:<br/>   1 if pt has any active flags, either Cat I or Cat II<br/>   0 otherwise</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N PRFARR<br/> S POPUP=$S($$GETACT^DGPFAPI(PTDFN,"PRFARR"):1,1:0)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uOrPtf.pas">uOrPtf.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}