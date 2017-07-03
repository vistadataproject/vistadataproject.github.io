---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF PAY FIX SEL REJECT ITEMS
# DSIF PAY FIX SEL REJECT ITEMS



Property | Value
--- | ---
Label | REINIT
Routine | [DSIFPAY6](http://code.osehra.org/dox/Routine_DSIFPAY6_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT IEN | LITERAL | 35 | true | Patient IEN
OLD BATCH | LITERAL | 35 | true | Old rejected batch number (IEN)
NEW BATCH | LITERAL | 35 | true | New Batch IEN
LINES | LIST | 50 | true | Lines to re-initiate, format: passed in by a list/array  ;     B3 BATCHES: FBLINES(NUM) &#x3D; PMT ID (N;N;N;N)                   FBLINES(NUM+n) &#x3D; PMT ID#2, (ETC) ;     B9 BATCHES: FBLINES(NUM) &#x3D; Invoice #1                   FBLINES(NUM+n) &#x3D; INVOICE #2,  (ECT) Value of NUM must start with &quot;1&quot;!



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}