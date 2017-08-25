---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF PAY DELETE PAYMENT<br/>
# DSIF PAY DELETE PAYMENT

Allows deletion of payment data based on flags supplied, usually requires supervisor key.

## Properties

Property | Value
--- | ---
Label | DELPAY
MUMPS Implementation | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PTID | LITERAL | 45 | true | FBID&#x3D;IEN of Fee Basis Patient file:(1)^IEN of fee basis vendor:(2) ^IEN ofTreatment date:(3)^CPT code:(4)^Batch number:(5)provided:(5)^Batch number:(6)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}