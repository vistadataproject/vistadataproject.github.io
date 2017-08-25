---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH DELETE<br/>
# DSIF BATCH DELETE

Used to delete an existing Batch for Fee Basis Return values:1^Batch [#] deleted-1^error message as below:  ;;Total dollars>0 ;;Invoice count>0 ;;Payment lien count>0 ;;Rejects pending flag is 'YES' ;;Batch has existing invoices

## Properties

Property | Value
--- | ---
Label | DELBATCH
MUMPS Implementation | [DSIFBAT1](http://code.osehra.org/dox/Routine_DSIFBAT1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BATCH NUMBER | LITERAL | 99 | true | Pass in batch IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}