---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDBA7 ISWITCH
# ORWDBA7 ISWITCH

CIDC RPCRETURNS 1 IF PATIENT HAS BILLABLE INSURANCERETURNS 0 IF PATIENT DOES NOT HAVE BILLABLE INSURANCE

Property | Value
--- | ---
Label | ISWITCH
Routine | [ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 14 | true | PATIENT&#x27;S IEN



### MUMPS Method Description

Property | Value
--- | ---
Method | [ISWITCH^ORWDBA7](http://code.osehra.org/dox/Routine_ORWDBA7_source.html)
Method Comment | Return 0 if don&#x27;t ask (no ins) or 1 to ask CIDC quest (yes ins)
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> S Y=$$CIDC^IBBAPI(DFN)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}