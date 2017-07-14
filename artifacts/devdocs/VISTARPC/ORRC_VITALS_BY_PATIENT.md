---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC VITALS BY PATIENT<br/>
# ORRC VITALS BY PATIENT

This call returns recent vitals measurements taken for the patient.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [ORRCVIT](http://code.osehra.org/dox/Routine_ORRCVIT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2.
START | LITERAL |  | true | This is the date to start searching for vitals, in the form YYYYMMDDHHMMSS;if no date range is specified, up to 5 sets of measurements will be returned.
STOP | LITERAL |  | true | This is the date to stop searching for vitals, in the form YYYYMMDDHHMMSS;if no date range is specified, up to 5 sets of measurements will bereturned.
DETAILS | LITERAL |  | true | This flag indicates whether to return the details of each vital signtaken (true), or just the list of measurement set IDs (false).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}