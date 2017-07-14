---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVS VISITS APPTS<br/>
# ORQQVS VISITS APPTS

Returns a list of patient appointments and visits for a date/time range.location.

## Properties

Property | Value
--- | ---
Label | VSITAPPT
Routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient ID (DFN) from Patient File [#2].
START DATE/TIME | LITERAL | 16 | true | Start date/time to return visits and appointments.  In internal FileMan format.
STOP DATE/TIME | LITERAL | 16 | true | Stop date/time to return visits and appointments. In internal FileMan format.
DUMMY | LITERAL | 16 | true | This is a dummy parameter so the Broker won&#x27;t crash.appointments for this location only will be returned.




## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}