---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR COMP ACCOUNTING SUMMARY
# DSIR COMP ACCOUNTING SUMMARY

This RPC returns a list of all internal entry numbers from file 19620 for a specified patient.

Property | Value
--- | ---
Label | CAS
Routine | [DSIROIR1](http://code.osehra.org/dox/Routine_DSIROIR1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 99 | true | The DFN of the selected patient.
START DATE | LITERAL | 7 | true | This is the FileMan date to start the report.  If it is null the routine will start at the begining.
END DATE | LITERAL | 7 | true | This is the FileMan date the report should stop counting.  If null the report will count all records from the start date thru the current date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}