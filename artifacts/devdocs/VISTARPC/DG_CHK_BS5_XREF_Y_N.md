---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DG CHK BS5 XREF Y N
# DG CHK BS5 XREF Y N

CHECKS IF OTHER PATIENTS ON "BS5" XREF WITH SAME LAST NAMERETURNS 1 OR 0 IN 1ST STRING (OR -1 IF BAD DFN OR NO ZERO NODE)IF 1 RETURNS TEXT TO BE DISPLAYED

Property | Value
--- | ---
Label | GUIBS5
Routine | [DPTLK6](http://code.osehra.org/dox/Routine_DPTLK6_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | PATIENT FILE IEN




### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}