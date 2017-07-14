---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ VCUD<br/>
# MAGQ VCUD

This call is to update the Image file VMC file references.

## Properties

Property | Value
--- | ---
Label | VCUD
Routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Pointer | LITERAL | 256 | true | This is the network location file IEN.
Extension | LITERAL | 3 | true | This is the image file extension of the file whose network reference is inneed of updating.
IEN | LITERAL | 256 | true | This is the IMAGE file (#2005) internal entry number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}