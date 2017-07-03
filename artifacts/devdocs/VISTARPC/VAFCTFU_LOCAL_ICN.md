---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VAFCTFU LOCAL ICN
# VAFCTFU LOCAL ICN

Given a patient DFN, it will determine if the Integration Control Number (ICN) assigned to the patient is a local ICN or a national ICN.

Property | Value
--- | ---
Label | IFLOCAL
Routine | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Patient DFN. | LITERAL | 255 | true | Patient DFN from PATIENT file (#2).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}