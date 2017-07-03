---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG IMAGE CURRENT INFO
# MAG IMAGE CURRENT INFO

This Remote Procedure returns current values for the variousDICOM tags that are to be included in the header of an exportedimage.

Property | Value
--- | ---
Label | INFO
Routine | [MAGDQR04](http://code.osehra.org/dox/Routine_MAGDQR04_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IMAGE | LITERAL | 20 | true | The value of this parameter is a number. This number is a pointerinto the Image File (#2005).This RPC will return information for the image that is identifiedby this pointer-value.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}