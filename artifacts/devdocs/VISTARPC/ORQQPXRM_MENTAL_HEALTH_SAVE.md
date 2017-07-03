---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPXRM MENTAL HEALTH SAVE
# ORQQPXRM MENTAL HEALTH SAVE

Stores test result responses from a reminder dialog.

Property | Value
--- | ---
Label | MHS
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TEST RESULTS | LITERAL | 16 | true | Test results. Needs to pass contents of the YS array (R1,R2,DFN,DUZ,ADATE etc).



### MUMPS Method Description

Property | Value
--- | ---
Method | [MHS^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Method Comment | DBIA 3080
Input Parameters | ORES



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}