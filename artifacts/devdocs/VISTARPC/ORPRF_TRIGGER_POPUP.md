---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORPRF TRIGGER POPUP<br/>
# ORPRF TRIGGER POPUP

Returns 1 if popup flag display should be triggered for given patient uponpatient selection. If not, returns 0. Does not require clean-up aftercalling it since it does not set arrays or globals.

## Properties

Property | Value
--- | ---
Label | TRIGRPOP
MUMPS Implementation | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PTDFN | LITERAL |  | true | IEN in Patient file of given patient.



## MUMPS Method Description

Property | Value
--- | ---
Method | [TRIGRPOP^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
Method Comment | Should the flag display pop up upon patient selection
Input Parameters | PTDFN
First Comment | {::nomarkdown}<pre><code> for patient PTDFN?<br/>As of 1/10/06, returns POPUP as:<br/>   1 if pt has any active flags, either Cat I or Cat II<br/>   0 otherwise</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N PRFARR<br/> S POPUP=$S($$GETACT^DGPFAPI(PTDFN,"PRFARR"):1,1:0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uOrPtf.pas">uOrPtf.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}