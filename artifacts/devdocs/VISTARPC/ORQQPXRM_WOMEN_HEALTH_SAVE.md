---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPXRM WOMEN HEALTH SAVE
# ORQQPXRM WOMEN HEALTH SAVE

Pass back data to be file in the Women's Health Package file 790.1.

Property | Value
--- | ---
Label | WH
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
WH RESULT | LIST |  | true | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [WH^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | ORRESULT
Code | {::nomarkdown}<pre><code> D WH^PXRMRPCC(.ORY,.ORRESULT) Q</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}