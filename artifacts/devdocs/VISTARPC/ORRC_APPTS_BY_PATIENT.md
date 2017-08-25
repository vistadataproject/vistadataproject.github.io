---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC APPTS BY PATIENT<br/>
# ORRC APPTS BY PATIENT

This call returns a list of the patient's appointments, includingscheduled procedures, within a given time frame.

## Properties

Property | Value
--- | ---
Label | APPT
MUMPS Implementation | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2.
START | LITERAL |  | true | This is the date to start searching for appointments, in the formYYYYMMDDHHMMSS.
STOP | LITERAL |  | true | This is the date to stop searching for appointments, in the formYYYYMMDDHHMMSS.
DETAILS | LITERAL |  | true | This flag indicates whether to return the details or note text with eachappointment (true) or just the list of appointment ID&#x27;s (false).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}