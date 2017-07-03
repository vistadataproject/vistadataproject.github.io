---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF PAY FIX REJ LINE ITEMS
# DSIF PAY FIX REJ LINE ITEMS



Property | Value
--- | ---
Label | REALL
Routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBOLDB | LITERAL | 10 | true | Batch IEN of the batch that held the line items that were rejected.
FBNEWB | LITERAL | 10 | true | Batch IEN of the batch that will hold the re-initiated line items.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}