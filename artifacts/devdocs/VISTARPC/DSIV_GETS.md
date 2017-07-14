---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV GETS<br/>
# DSIV GETS

Returns details of INSURANCE BUFFER file entry.

## Properties

Property | Value
--- | ---
Label | GETS
Routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IENS | LITERAL | 16 | true | INSURANCE BUFFER file internal entry number or IENS.
FIELDS | LITERAL | 240 | true | Field list (optional).  Default is all top-level fields.
FLAGS | LITERAL | 16 | true | Flags (optional).  Default is external format, omit empty fields.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}