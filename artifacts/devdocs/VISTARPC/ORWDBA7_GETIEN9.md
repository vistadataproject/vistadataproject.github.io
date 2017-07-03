---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDBA7 GETIEN9
# ORWDBA7 GETIEN9

Receive external ICD9 number and return IEN

Property | Value
--- | ---
Label | GETIEN9
Routine | [ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICD9 | LIST | 9 | true | External ICD9 number



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETIEN9^ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
Method Comment | Return IEN for an ICD9 code (RPC: ORWDBA7 GETIEN9)
Input Parameters | ICD9
Code | {::nomarkdown}<pre><code> S Y=+$$ICDDATA^ICDXCODE("DIAGNOSIS",ICD9,DT)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBAGlobals.pas">BA/UBAGlobals.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}