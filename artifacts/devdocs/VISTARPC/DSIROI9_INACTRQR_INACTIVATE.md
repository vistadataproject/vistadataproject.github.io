---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIROI9 INACTRQR INACTIVATE<br/>
# DSIROI9 INACTRQR INACTIVATE

This RPC should be used to toggle the Inactive field of the DSIR NEW REQUESTOR file (#19620.12).

## Properties

Property | Value
--- | ---
Label | INACTRQR
Routine | [DSIROI9](http://code.osehra.org/dox/Routine_DSIROI9_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number to file #19620.12 - DSIR NEW REQUESTOR
FLG | LITERAL | 1 | true | Inactive Flag (Optional 0 &#x3D; Active, 1 &#x3D; Inactive) [Default - 0]



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}