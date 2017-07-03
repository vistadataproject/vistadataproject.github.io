---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQVS VISITS APPTS
# ORQQVS VISITS APPTS

Returns a list of patient appointments and visits for a date/time range.location.

Property | Value
--- | ---
Label | VSITAPPT
Routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient ID (DFN) from Patient File [#2].
START DATE/TIME | LITERAL | 16 | true | Start date/time to return visits and appointments.  In internal FileMan format.
STOP DATE/TIME | LITERAL | 16 | true | Stop date/time to return visits and appointments. In internal FileMan format.
DUMMY | LITERAL | 16 | true | This is a dummy parameter so the Broker won&#x27;t crash.appointments for this location only will be returned.




### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}