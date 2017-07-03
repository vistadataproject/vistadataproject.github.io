---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETENCDXS
# EC GETENCDXS

Returns a patient encounter primary and secondary diagnosis codes from Event Capture Patient File (#721).

Property | Value
--- | ---
Label | ENCDXS
Routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input variable ECARY has the followed pieces of data separated by up-arrows.  1. ECDFN - Patient ien (#200)  2. ECDT  - Procedure date and time (fileman format)  3. ECL   - Location ien  4. EC4   - Clinic ien



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}