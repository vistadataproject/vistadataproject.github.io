---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP CHK DEL BATCH<br/>
# DSIF INP CHK DEL BATCH

This RPC checks the validity of a given batch for ownership and status to determine if an invoice in this batch can be deleted.

## Properties

Property | Value
--- | ---
Label | VALDEL
MUMPS Implementation | [DSIFEP](http://code.osehra.org/dox/Routine_DSIFEP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number of FEE BASIS BATCH File #161.7



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}