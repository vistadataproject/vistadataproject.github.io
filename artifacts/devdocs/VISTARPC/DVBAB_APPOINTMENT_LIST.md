---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB APPOINTMENT LIST
# DVBAB APPOINTMENT LIST

Returns a list of past, future or all appointments.

Property | Value
--- | ---
Label | DPA
Routine | [DVBAB1B](http://code.osehra.org/dox/Routine_DVBAB1B_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAL1 | LITERAL | 10 | true | This is the DFN - the ien for the patient selected
VAL2 | LITERAL | 1 | true | This is CHOICE - valid input is A (for All appointments), F (for FutureAppointments, or P (for Past Appointments).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}