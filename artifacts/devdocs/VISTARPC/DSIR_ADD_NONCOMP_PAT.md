---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR ADD NONCOMP PAT<br/>
# DSIR ADD NONCOMP PAT

Routine for adding or updating an non-computerized patient for ROI.

## Properties

Property | Value
--- | ---
Label | ADDNCPR
MUMPS Implementation | [DSIROI0](http://code.osehra.org/dox/Routine_DSIROI0_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL | 30 | true | This is the patient name.
SSN | LITERAL | 11 | true | This is the patient Social Security Number
DOB | LITERAL | 7 | true | This is the date of birth used for unique identification.patient file and the dsir noncomputerized record patient file.
OVRD | LITERAL | 1 | true | This is a flag (0 or 1) to override/bypass the lookups into xrefs.  If true the RPC will laygo into file 19620.96 without checking for duplicates.
NCPIEN | LITERAL | 99 | true | This is the desired IEN. If this exists then it is an update not an add.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}