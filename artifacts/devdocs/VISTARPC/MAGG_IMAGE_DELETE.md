---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG IMAGE DELETE<br/>
# MAGG IMAGE DELETE

Deletes Image entry from Image file, ^MAG(2005 and Image File from disk.

## Properties

Property | Value
--- | ---
Label | IMAGEDEL
Routine | [MAGGTID](http://code.osehra.org/dox/Routine_MAGGTID_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 30 | true | Internal entry number in the IMAGE FM File.  ^MAG(2005
MAGGRPDF | LITERAL | 1 | true | This is a Group Delete Flag1 or 0     1  &#x3D;  Allow Group Delete     0  &#x3D;  Do not Allow Group Deletes.
REASON | LITERAL | 60 | true | This is a free text description of the Reason for Deleting the Image.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}