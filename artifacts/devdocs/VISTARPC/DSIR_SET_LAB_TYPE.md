---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR SET LAB TYPE<br/>
# DSIR SET LAB TYPE

Routine for setting the requested lab type for a given request.

## Properties

Property | Value
--- | ---
Label | STLABTYP
Routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ROI | LITERAL | 10 | true | INPUT PARAMETER   ROI &#x3D; REQUEST IEN
TYP | LITERAL | 2 | true | INPUT PARAMETER    TYP &#x3D; SELECTED LAB TYPE - A NUMERIC VALUE &gt;&#x3D; 0



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}