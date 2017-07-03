---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRC TASKS BY PATIENT
# ORRC TASKS BY PATIENT

This call returns a list of tasks for a patient that are not yetcompleted.

Property | Value
--- | ---
Label | LIST
Routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2.
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200; if definedthen tasks will be returned that USER created or all incomplete tasks ifUSER is linked to the patient in some way.
DUE | LITERAL |  | true | This is a date in the format YYYYMMDD[HHMMSS]; if defined, then onlytasks that are past DUE (i.e. Due Date is prior to DUE) will be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}