---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRC ALERTS BY PATIENT
# ORRC ALERTS BY PATIENT

This call returns a list of the patient's non-ADT alerts.

Property | Value
--- | ---
Label | PAT
Routine | [ORRCXQ](http://code.osehra.org/dox/Routine_ORRCXQ_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2.
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}