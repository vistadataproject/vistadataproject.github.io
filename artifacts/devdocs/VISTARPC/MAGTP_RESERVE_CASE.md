---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGTP RESERVE CASE<br/>
# MAGTP RESERVE CASE

Set/Unset a logical lock on a case for reservation

## Properties

Property | Value
--- | ---
Label | LOCKR
Routine | [MAGTP003](http://code.osehra.org/dox/Routine_MAGTP003_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Lock/Unlock Flag | LITERAL | 1 | true | Lock/Unlock Flag
AP Section | LITERAL | 2 | true | AP Section
Year | LITERAL | 4 | true | Year
Access Number | LITERAL | 5 | true | Access Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}