---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP VERIFY PAYMENT CODES<br/>
# DSIF INP VERIFY PAYMENT CODES

This RPC will take in a 7078/583 pointer for an inpatient claim to determine whether the inputted ICD-9 or ICD-10 Diagnosis and Procedure codes are valid. It will return the inputted codes in as an array with either the internal number (for valid) or -1 (for invalid) or -2 (for inactive) for the codes that aren't.

## Properties

Property | Value
--- | ---
Label | VERIFY
Routine | [DSIFEP2](http://code.osehra.org/dox/Routine_DSIFEP2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFAUTH | LITERAL |  | true | This is the pointer to the 7078/583 you wish to verify the ICD Diagnosis and Procedure codes for. (Required).
DATA | LIST |  | true | This is the array of codes you wish to verify. The array should look like this: ; DATA(I)&#x3D;DIAG or PROC or ADMIT^# (1-25)^External Value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}