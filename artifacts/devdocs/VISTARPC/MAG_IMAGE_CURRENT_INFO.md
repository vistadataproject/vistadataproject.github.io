---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG IMAGE CURRENT INFO<br/>
# MAG IMAGE CURRENT INFO

This Remote Procedure returns current values for the variousDICOM tags that are to be included in the header of an exportedimage.

## Properties

Property | Value
--- | ---
Label | INFO
Routine | [MAGDQR04](http://code.osehra.org/dox/Routine_MAGDQR04_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IMAGE | LITERAL | 20 | true | The value of this parameter is a number. This number is a pointerinto the Image File (#2005).This RPC will return information for the image that is identifiedby this pointer-value.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}