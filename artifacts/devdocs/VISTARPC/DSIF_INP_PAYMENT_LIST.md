---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP PAYMENT LIST<br/>
# DSIF INP PAYMENT LIST

This RPC returns a list of all entries in file 162.5 for a given entry in 7078.

## Properties

Property | Value
--- | ---
Label | LOOKUP
MUMPS Implementation | [DSIFEP1](http://code.osehra.org/dox/Routine_DSIFEP1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FB7078 | LITERAL | 99 | true | Internal Entry Number to file 162.4



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}