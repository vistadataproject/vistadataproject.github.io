---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC DDR WP FILER
# DSIC DDR WP FILER

This will file the text into the specified word processing field.

Property | Value
--- | ---
Label | WP
Routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the file (or subfile) number for which the word processing field belongs.
IENS | LITERAL | 50 | true | This is the appropriate Fileman DBS IENS for filing the word processing field
FIELD | LITERAL | 20 | true | This is field number of the word processing field
FLAGS | LITERAL | 10 | true | This is the FLAGS parameter for the WP^DIE call.
DATA | LIST | 250 | true | This is the text to be filed into the word processing field.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}