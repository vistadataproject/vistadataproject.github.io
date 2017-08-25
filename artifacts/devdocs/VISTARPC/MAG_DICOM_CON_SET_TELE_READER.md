---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM CON SET TELE READER<br/>
# MAG DICOM CON SET TELE READER

This allows the user to select/deselect an item from his/her siteand specialty list.

## Properties

Property | Value
--- | ---
Label | SETREAD
MUMPS Implementation | [MAGDTR06](http://code.osehra.org/dox/Routine_MAGDTR06_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SELECT | LITERAL |  | true | User selection preference - 1&#x3D;select, 0&#x3D;ignore
IENPARAM | LITERAL |  | true | Pointer to User Parameter file 2006.5843



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}