---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DPT TEST PATIENT<br/>
# DSIC DPT TEST PATIENT

This will return a Boolean value indicating whether or not the patient record is a test patient or a real patient.

## Properties

Property | Value
--- | ---
Label | TEST
Routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PAT | LITERAL | 35 | true | This is any lookup value for a patient (name, SSN, DFN, etc.)
ISSSN | LITERAL | 1 | true | This is a Boolean flag.  If 1, then the PAT lookup value is the patient&#x27;s SSN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}