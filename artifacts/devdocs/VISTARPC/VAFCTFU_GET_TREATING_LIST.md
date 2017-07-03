---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VAFCTFU GET TREATING LIST
# VAFCTFU GET TREATING LIST

Given a patient DFN, this will return a list of treating facilities.

Property | Value
--- | ---
Label | TFL
Routine | [VAFCTFU1](http://code.osehra.org/dox/Routine_VAFCTFU1_source.html)
Return Type | WORD PROCESSING


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Patient DFN. | LITERAL | 255 | true | Patient DFN from PATIENT file (#2).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}