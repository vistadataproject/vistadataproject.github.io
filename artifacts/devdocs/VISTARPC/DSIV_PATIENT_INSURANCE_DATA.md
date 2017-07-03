---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV PATIENT INSURANCE DATA
# DSIV PATIENT INSURANCE DATA

Wraps $$INSUR^IBBAPI to return insurance data for patient.

Property | Value
--- | ---
Label | INSUR
Routine | [DSIVIC3](http://code.osehra.org/dox/Routine_DSIVIC3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Patient internal entry number.
FMDT | LITERAL | 14 | true | Date insured (default is today).
FILTER | LITERAL | 8 | true | Status codes specifying results to be included or excluded.
FIELDS | LITERAL | 80 | true | List of fields to be returned (default is all).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}