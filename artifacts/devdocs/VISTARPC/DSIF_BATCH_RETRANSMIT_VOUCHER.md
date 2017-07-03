---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF BATCH RETRANSMIT VOUCHER
# DSIF BATCH RETRANSMIT VOUCHER

 ; Input : FBN: batch IEN ; Output: FBOUT: returns 1 and success message if successful, -1 and error message if failed

Property | Value
--- | ---
Label | VOUCH
Routine | [DSIFBAT9](http://code.osehra.org/dox/Routine_DSIFBAT9_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBN | LITERAL | 9 | true | Batch IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}