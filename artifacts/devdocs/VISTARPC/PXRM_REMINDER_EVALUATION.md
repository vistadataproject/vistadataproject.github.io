---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PXRM REMINDER EVALUATION
# PXRM REMINDER EVALUATION

 Allows evaluation of a list of reminders. Returns a list of clinical reminders due/applicable or not applicable to the patient.

Property | Value
--- | ---
Label | ALIST
Routine | [PXRMRPCA](http://code.osehra.org/dox/Routine_PXRMRPCA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier from the patient file [#2]
REMINDER ARRAY | LIST | 16 | true | List of reminders in format :           array(1) &#x3D; reminder ien1 (from #811.9)         array(2) &#x3D; reminder ien2         etc



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}