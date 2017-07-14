---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF ICD IMP DATE<br/>
# DSIF ICD IMP DATE

This RPC will retrieve the ICD code system implementation date.

## Properties

Property | Value
--- | ---
Label | IMPDATE
Routine | [DSIFICD](http://code.osehra.org/dox/Routine_DSIFICD_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFSYS | LITERAL |  | true | This is the coding system abbreviation from VistA. This parameter is required.     Input:     DSIFSYS   Coding System               1 OR &quot;ICD&quot; &#x3D; ICD-9-CM              2 OR &quot;ICP&quot; &#x3D; ICD-9-PCS             30 OR &quot;10D&quot; &#x3D; ICD-10-CM             31 OR &quot;10P&quot; &#x3D; ICD-10-PCS



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}