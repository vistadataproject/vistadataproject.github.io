---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF PAY FIX ALL REJ ITEMS<br/>
# DSIF PAY FIX ALL REJ ITEMS

re-initiate all rejected line items in medical (B3) type batch

## Properties

Property | Value
--- | ---
Label | ALLMEDR
MUMPS Implementation | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OLD BATCH | LITERAL | 35 | true | Old Batch IEN
NEW BATCH | LITERAL | 35 | true | New Batch IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}