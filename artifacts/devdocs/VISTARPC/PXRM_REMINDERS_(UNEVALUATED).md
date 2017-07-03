---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PXRM REMINDERS (UNEVALUATED)
# PXRM REMINDERS (UNEVALUATED)

Returns list of CPRS reminders for patient/location (no evaluation is done)

Property | Value
--- | ---
Label | LIST
Routine | [PXRMRPCA](http://code.osehra.org/dox/Routine_PXRMRPCA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true |  Patient identifier from the patient file [#2]
HOSPITAL LOCATION | LITERAL | 16 | true | Patients location from HOSPITAL LOCATION [#44]. May be null



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}