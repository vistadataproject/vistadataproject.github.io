---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU LINK DOCUMENT TO IMAGE<br/>
# TIU LINK DOCUMENT TO IMAGE

This RPC links a document with an image. It will support a many-to-manyassociation between documents and images.

## Properties

Property | Value
--- | ---
Label | PUTIMAGE
Routine | [TIUSRVPL](http://code.osehra.org/dox/Routine_TIUSRVPL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number (IEN) of the document in the TIU DOCUMENT FILE(#8925).
IMGDA | LITERAL |  | true | This is the record number (IEN) of the document in the IMAGE FILE (#2005).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}