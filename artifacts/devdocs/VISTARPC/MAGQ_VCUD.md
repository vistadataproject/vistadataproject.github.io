---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQ VCUD
# MAGQ VCUD

This call is to update the Image file VMC file references.

Property | Value
--- | ---
Label | VCUD
Routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Pointer | LITERAL | 256 | true | This is the network location file IEN.
Extension | LITERAL | 3 | true | This is the image file extension of the file whose network reference is inneed of updating.
IEN | LITERAL | 256 | true | This is the IMAGE file (#2005) internal entry number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}