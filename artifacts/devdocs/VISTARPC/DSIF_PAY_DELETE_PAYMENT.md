---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF PAY DELETE PAYMENT
# DSIF PAY DELETE PAYMENT

Allows deletion of payment data based on flags supplied, usually requires supervisor key.

Property | Value
--- | ---
Label | DELPAY
Routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PTID | LITERAL | 45 | true | FBID&#x3D;IEN of Fee Basis Patient file:(1)^IEN of fee basis vendor:(2) ^IEN ofTreatment date:(3)^CPT code:(4)^Batch number:(5)provided:(5)^Batch number:(6)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}