---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV PERSON CLASS INQUIRY
# DENTV PERSON CLASS INQUIRY

This is an RPC wrapper for the Kernal call $$GET^XUA4A72 to determine the active providers class information.

Property | Value
--- | ---
Label | PROVINQ
Routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROV | LITERAL |  | true | The provider DUZ that is to be checked.
DENTDAT | LITERAL |  |  | This is the date used to determine the providers class (in case a historical lookup is required).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}