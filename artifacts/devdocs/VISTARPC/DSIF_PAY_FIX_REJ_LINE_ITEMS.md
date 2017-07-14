---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF PAY FIX REJ LINE ITEMS<br/>
# DSIF PAY FIX REJ LINE ITEMS



## Properties

Property | Value
--- | ---
Label | REALL
Routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBOLDB | LITERAL | 10 | true | Batch IEN of the batch that held the line items that were rejected.
FBNEWB | LITERAL | 10 | true | Batch IEN of the batch that will hold the re-initiated line items.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}