---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF PAY ALL PAYMENTS DISPLAY
# DSIF PAY ALL PAYMENTS DISPLAY

Input DFN and Vendor IEN, to get a list of existing payments.Optional parameters are Date of service (FM date) and CPT IEN.

Property | Value
--- | ---
Label | EN1
Routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | 
VENDOR IEN | LITERAL | 25 | true | 
DATE OF SERVICE | LITERAL | 7 | true | Date of service FM format (optional) **Unless you enter a CPT code, then it is required!
CPT | LITERAL | 12 | true | CPT code, external value.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}