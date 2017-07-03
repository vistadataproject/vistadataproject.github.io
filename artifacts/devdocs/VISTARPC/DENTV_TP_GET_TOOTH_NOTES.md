---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV TP GET TOOTH NOTES
# DENTV TP GET TOOTH NOTES

This returns all the tooth notes for all dates for a patient.  The data will be sorted by tooth number and then by reverse date.

Property | Value
--- | ---
Label | GET
Routine | [DENTVTP6](http://code.osehra.org/dox/Routine_DENTVTP6_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}