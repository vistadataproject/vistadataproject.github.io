---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF PAY PAYMENT DISPLAY
# DSIF PAY PAYMENT DISPLAY



Property | Value
--- | ---
Label | DISPAY
Routine | [DSIFPAY1](http://code.osehra.org/dox/Routine_DSIFPAY1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 35 | true | Patient IEN (File 161)
VENDOR | LITERAL | 35 | true | Vendor IEN (File 162)
DATE OF SERVICE | LITERAL | 7 | true | Fileman date of service
CPT | LITERAL | 10 | true | CPT code, (service provided)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}