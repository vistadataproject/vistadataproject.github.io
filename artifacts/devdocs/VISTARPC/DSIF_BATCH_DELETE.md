---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF BATCH DELETE
# DSIF BATCH DELETE

Used to delete an existing Batch for Fee Basis Return values:1^Batch [#] deleted-1^error message as below:  ;;Total dollars>0 ;;Invoice count>0 ;;Payment lien count>0 ;;Rejects pending flag is 'YES' ;;Batch has existing invoices

Property | Value
--- | ---
Label | DELBATCH
Routine | [DSIFBAT1](http://code.osehra.org/dox/Routine_DSIFBAT1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BATCH NUMBER | LITERAL | 99 | true | Pass in batch IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}