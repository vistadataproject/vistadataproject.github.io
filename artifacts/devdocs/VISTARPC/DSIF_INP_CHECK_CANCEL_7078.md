---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP CHECK CANCEL 7078<br/>
# DSIF INP CHECK CANCEL 7078

This RPC does some basic checks on a 7078 to see if can be cancelled.

## Properties

Property | Value
--- | ---
Label | CANCHK
MUMPS Implementation | [DSIFNOT2](http://code.osehra.org/dox/Routine_DSIFNOT2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Pointer to file 162.4 VA FORM 10-7078 (Required)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}