---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPXRM REMINDERS UNEVALUATED
# ORQQPXRM REMINDERS UNEVALUATED

Returns list of CPRS reminders for patient/location (no evaluation isdone)

Property | Value
--- | ---
Label | LIST
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier from the patient file [#2]
HOSPITAL LOCATION | LITERAL | 16 |  | Patients location from HOSPITAL LOCATION [#44]. May be null



### MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | ORPT, ORLOC
First Comment | {::nomarkdown}<pre><code>D LIST^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078<br/><br/>ORQQPXRM MENTAL HEALTH</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}