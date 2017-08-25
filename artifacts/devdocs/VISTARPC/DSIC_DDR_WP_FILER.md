---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DDR WP FILER<br/>
# DSIC DDR WP FILER

This will file the text into the specified word processing field.

## Properties

Property | Value
--- | ---
Label | WP
MUMPS Implementation | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the file (or subfile) number for which the word processing field belongs.
IENS | LITERAL | 50 | true | This is the appropriate Fileman DBS IENS for filing the word processing field
FIELD | LITERAL | 20 | true | This is field number of the word processing field
FLAGS | LITERAL | 10 | true | This is the FLAGS parameter for the WP^DIE call.
DATA | LIST | 250 | true | This is the text to be filed into the word processing field.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}