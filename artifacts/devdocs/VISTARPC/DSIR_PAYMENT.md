---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR PAYMENT
# DSIR PAYMENT

This RPC is used to record payments on ROI bills

Property | Value
--- | ---
Label | PAYMENT
Routine | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BILN | LITERAL | 999 | true | Internal Bill Number to file 19620.2
AMNT | LITERAL | 999 | true | Payment amount - Numeric dollar value or &#x27;W&#x27; to indicate fee is to be Waived



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}