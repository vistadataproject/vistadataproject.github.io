---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV PATIENT INSURANCE CHECK
# DSIV PATIENT INSURANCE CHECK

Checks insurance for a single patient.

Property | Value
--- | ---
Label | CKINS
Routine | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Patient Internal Entry Number.
DAYS | LITERAL | 10 | true | Number of days prior to today for last verified check (default&#x3D;182).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}