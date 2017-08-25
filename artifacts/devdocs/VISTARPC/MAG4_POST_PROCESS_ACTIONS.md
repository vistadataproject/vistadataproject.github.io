---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 POST PROCESS ACTIONS<br/>
# MAG4 POST PROCESS ACTIONS

 This is call to perform any post processing action required on  a newly saved image of this type.  post processing (for now) is  determined by the IMAGE INDEX FOR TYPES file.  If this image  points to an entry in that file that has Action turned ON, then  the TAG^ROUTINE will be called with the Image IEN.

## Properties

Property | Value
--- | ---
Label | POSTACT
MUMPS Implementation | [MAGGSPP](http://code.osehra.org/dox/Routine_MAGGSPP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | Internal entry number in the Image File (^MAG(2005))



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}