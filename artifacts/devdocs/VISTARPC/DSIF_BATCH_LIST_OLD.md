---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH LIST OLD<br/>
# DSIF BATCH LIST OLD

This RPC traverses through both inpatient and outpatient records and retrieves a list of batches that are in purgatory.

## Properties

Property | Value
--- | ---
Label | GETOLD
MUMPS Implementation | [DSIFLRJ](http://code.osehra.org/dox/Routine_DSIFLRJ_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBFROM | LITERAL | 7 | true | FBFROM - From date (optional)
FBTO | LITERAL | 7 | true | FBTO - To date (optional)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}