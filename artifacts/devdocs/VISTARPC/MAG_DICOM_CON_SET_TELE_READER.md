---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM CON SET TELE READER
# MAG DICOM CON SET TELE READER

This allows the user to select/deselect an item from his/her siteand specialty list.

Property | Value
--- | ---
Label | SETREAD
Routine | [MAGDTR06](http://code.osehra.org/dox/Routine_MAGDTR06_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SELECT | LITERAL |  | true | User selection preference - 1&#x3D;select, 0&#x3D;ignore
IENPARAM | LITERAL |  | true | Pointer to User Parameter file 2006.5843



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}