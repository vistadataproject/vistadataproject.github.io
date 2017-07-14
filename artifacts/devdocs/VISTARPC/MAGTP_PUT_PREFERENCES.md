---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGTP PUT PREFERENCES<br/>
# MAGTP PUT PREFERENCES

Set the user's setting/configuration preferences in XML format in the configuration file (#2006.13)

## Properties

Property | Value
--- | ---
Label | PUTUPREF
Routine | [MAGTP011](http://code.osehra.org/dox/Routine_MAGTP011_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENT | LIST |  | true | Input array:First Line:      DUZ^LABELFollowing Lines: One XML line of textIf DUZ is null, default to current DUZ



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}