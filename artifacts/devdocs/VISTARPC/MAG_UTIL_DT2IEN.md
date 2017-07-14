---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG UTIL DT2IEN<br/>
# MAG UTIL DT2IEN

This Remote Procedure uses a date range to find an IEN in the IMAGE File (#2005)

## Properties

Property | Value
--- | ---
Label | DTRANGE
Routine | [MAGSHEC](http://code.osehra.org/dox/Routine_MAGSHEC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATE | LITERAL | 36 | true | DATE for IMAGE file (#2005) IEN search by Image Saved Date
LIMIT | LITERAL |  |  | LIMIT - 0: LIMIT ONE YEAR RANGE        1: NONE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}