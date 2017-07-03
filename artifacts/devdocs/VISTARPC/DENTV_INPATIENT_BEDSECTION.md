---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV INPATIENT BEDSECTION
# DENTV INPATIENT BEDSECTION

This will return a string indicating whether or not the patient is a current inpatient.  If an inpatient, then also return, if possible, the PTF Specialty and Dental Bedsection associated with the current ward that the patient is lodged.

Property | Value
--- | ---
Label | INP
Routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 15 | true | This is a pointer to the PATIENT file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}