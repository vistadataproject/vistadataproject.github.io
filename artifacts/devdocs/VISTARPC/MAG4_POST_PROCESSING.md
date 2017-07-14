---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 POST PROCESSING<br/>
# MAG4 POST PROCESSING

This is call to perform any post processing action required on a newly saved image of this type.  post processing (for now) isdetermined by the MAG DESCRIPTIVE CAGETORIES file.  If this imagepoints to an entry in that file that has Action turned ON, thenthe TAG^ROUTINE will be called with the Image IEN.

## Properties

Property | Value
--- | ---
Label | ACTION
Routine | [MAGGSPP](http://code.osehra.org/dox/Routine_MAGGSPP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | Internal entry number in the Image File (^MAG(2005))



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}