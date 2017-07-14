---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP PROCEDURE<br/>
# DSIF INP PROCEDURE

Pass in procedure number of IEN of procedure (File #80.1) for a description and IEN 

## Properties

Property | Value
--- | ---
Label | PROCLK
Routine | [DSIFINP1](http://code.osehra.org/dox/Routine_DSIFINP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL | 10 | true | The procedure code (external format) you wish to lookup (file #80.1).
DATE | LITERAL | 12 | true | The date you wish to check the code against code set versioning.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}