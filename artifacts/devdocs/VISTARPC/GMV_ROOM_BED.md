---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV ROOM BED<br/>
# GMV ROOM BED

This procedure extracts room/bed information from Room-Bed file (#405.4)for a given MAS ward.

## Properties

Property | Value
--- | ---
Label | ROOMBED
MUMPS Implementation | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMRWARD | LITERAL | 30 | true | GMRWARD is a MAS ward name from the Ward Location file (#42).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}