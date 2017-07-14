---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC PX GET VISIT INFO2<br/>
# DSIC PX GET VISIT INFO2

Return all field values for a visit in internal or external format or both.

## Properties

Property | Value
--- | ---
Label | LOOK
Routine | [DSICPX3](http://code.osehra.org/dox/Routine_DSICPX3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 20 | true | DATA &#x3D; p1^p2   where  p1 &#x3D; visit ien or visit&#x27;s ID -  required       p2 &#x3D; return format            I :&#x3D; internal values            E :&#x3D; external values            B :&#x3D; both internal and external formats - default



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}