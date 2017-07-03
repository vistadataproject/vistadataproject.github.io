---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPXRM GET WH REPORT TEXT
# ORQQPXRM GET WH REPORT TEXT

This RPC will return the Radiology/Lab Report for a WH Procedure

Property | Value
--- | ---
Label | WHREPORT
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | IEN is equal the Women&#x27;s Health Procedure IEN



### MUMPS Method Description

Property | Value
--- | ---
Method | [WHREPORT^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | ORIEN
Code | {::nomarkdown}<pre><code> D RESULTS^WVALERTF(.ORY,ORIEN) Q</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uReminders.pas">uReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}