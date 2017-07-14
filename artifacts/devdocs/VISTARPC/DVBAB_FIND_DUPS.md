---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB FIND DUPS<br/>
# DVBAB FIND DUPS

Find potential duplicates within the PATIENT File (#2) At least one of NAM, DOB, or SSN must be passedPossible matches are "better" when more than one of these is passed

## Properties

Property | Value
--- | ---
Label | DUP
Routine | [DVBAB84](http://code.osehra.org/dox/Routine_DVBAB84_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAM | LITERAL |  |  | Name of possible patient
DOB | LITERAL | 7 |  | Date of Birth of possible patient
SSN | LITERAL | 10 |  | Social Security Number of possible patient



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}