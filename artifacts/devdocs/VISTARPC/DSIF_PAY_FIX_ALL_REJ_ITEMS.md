---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF PAY FIX ALL REJ ITEMS
# DSIF PAY FIX ALL REJ ITEMS

re-initiate all rejected line items in medical (B3) type batch

Property | Value
--- | ---
Label | ALLMEDR
Routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OLD BATCH | LITERAL | 35 | true | Old Batch IEN
NEW BATCH | LITERAL | 35 | true | New Batch IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}