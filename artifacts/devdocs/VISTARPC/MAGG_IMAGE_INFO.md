---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG IMAGE INFO<br/>
# MAGG IMAGE INFO

Returns information on 1 Image

## Properties

Property | Value
--- | ---
Label | IMAGEINF
MUMPS Implementation | [MAGGTU3](http://code.osehra.org/dox/Routine_MAGGTU3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 30 | true | internal entry number in IMAGE file  ^MAG(2005,IEN
NOQACHK | LITERAL | 4 | true | If this flag is sent with a value of 1, then the QA check willnot be run.  Image information will be returned even if it is animage of Questionable Integrity.This is used when deleting an Image, but the user needs to seeinformation that may have been blocked otherwise.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}