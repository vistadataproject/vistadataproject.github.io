---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVA GET JUKEBOX WL<br/>
# MAGVA GET JUKEBOX WL

Returns Jukebox Write Location by Station number or Institution IEN

## Properties

Property | Value
--- | ---
Label | GETJBXWL
MUMPS Implementation | [MAGVAG03](http://code.osehra.org/dox/Routine_MAGVAG03_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;STATION NUMBER&quot;) &#x3D; STATION NUMBER field (#4,99) in INSTITUTION file (#4) or MAGPARAM(&quot;INSTITUTION IEN&quot;) &#x3D; IEN in INSTITUTION file (#4)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}