---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ JPUD<br/>
# MAGQ JPUD

This call is to update the Image file JUKEBOX file references.

## Properties

Property | Value
--- | ---
Label | JPUD
Routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
POINTER | LITERAL | 256 | true | This is the network location file IEN.
EXTENSION | LITERAL | 3 | true | This is the image file extension of the file whose jukebox reference is inneed of updating.
IEN | LITERAL | 256 | true | This is the IMAGE file (#2005) internal entry number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}