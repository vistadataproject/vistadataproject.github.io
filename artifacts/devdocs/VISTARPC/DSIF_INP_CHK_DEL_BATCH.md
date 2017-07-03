---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP CHK DEL BATCH
# DSIF INP CHK DEL BATCH

This RPC checks the validity of a given batch for ownership and status to determine if an invoice in this batch can be deleted.

Property | Value
--- | ---
Label | VALDEL
Routine | [DSIFEP](http://code.osehra.org/dox/Routine_DSIFEP_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number of FEE BASIS BATCH File #161.7



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}