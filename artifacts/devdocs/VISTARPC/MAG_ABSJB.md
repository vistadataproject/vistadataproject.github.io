---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG ABSJB<br/>
# MAG ABSJB

Sets queue entry to create abstract and/or copy to jukebox.

## Properties

Property | Value
--- | ---
Label | ABSJB
MUMPS Implementation | [MAGGTU71](http://code.osehra.org/dox/Routine_MAGGTU71_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 255 | true | Pointer to image file
DATA | LITERAL | 200 | true | $P(1) IEN.  Set an Abstract Queue for the IEN.           - Abstract will be created.$p(2) IEN. Set a JukeBox Queue for the IEN.           - Image will be copied from Jukebox.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}