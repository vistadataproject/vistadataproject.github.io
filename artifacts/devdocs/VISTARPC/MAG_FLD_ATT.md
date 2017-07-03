---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG FLD ATT
# MAG FLD ATT

This RPC returns a list of field attributes.

Property | Value
--- | ---
Label | DDLF
Routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 32 | true | The file number that contains the desired attribute.
FIELD | LITERAL | 32 | true | The desired field attribute.
FLAG | LITERAL | 32 | true | 
ATTR | LITERAL | 32 | true | The field attribute desired.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}