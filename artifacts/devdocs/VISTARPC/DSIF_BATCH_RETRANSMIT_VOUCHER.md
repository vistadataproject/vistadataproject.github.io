---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH RETRANSMIT VOUCHER<br/>
# DSIF BATCH RETRANSMIT VOUCHER

 ; Input : FBN: batch IEN ; Output: FBOUT: returns 1 and success message if successful, -1 and error message if failed

## Properties

Property | Value
--- | ---
Label | VOUCH
MUMPS Implementation | [DSIFBAT9](http://code.osehra.org/dox/Routine_DSIFBAT9_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBN | LITERAL | 9 | true | Batch IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}