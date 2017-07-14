---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRPARM SENCLN ADD<br/>
# DSIRPARM SENCLN ADD

This RPC will add entries into file 19620.703 (DSIR SENSITIVE CLINIC) for use by the ROI Plus application when it identifies documents related to a clinic that the ROI department consider sensitive.

## Properties

Property | Value
--- | ---
Label | SENCLN
Routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number to HOSPITAL LOCATION File #44 - Required



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}