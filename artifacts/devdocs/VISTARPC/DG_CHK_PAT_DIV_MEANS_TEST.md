---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DG CHK PAT DIV MEANS TEST
# DG CHK PAT DIV MEANS TEST

CHECKS IF MEANS TEST REQUIRED FOR PATIENT ANDCHECKS IF MEANS TEST DISPLAY REQUIRED FOR USER'S DIVISIONRETURNS 1 IN 1ST STRING IF BOTH TRUE OTHERWISE 0IF BOTH TRUE RETURNS TEXT IN 2ND AND 3RD STRING (IF ANY)

Property | Value
--- | ---
Label | GUIMTD
Routine | [DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | PATIENT IEN
DUZ2 | LITERAL |  | true | Institution file pointer




### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}