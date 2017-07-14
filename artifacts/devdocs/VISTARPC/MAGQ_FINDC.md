---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ FINDC<br/>
# MAGQ FINDC

By placing carat delimited values in the find value parameterthe subscriber can perform a compound index lookup on an extended primary key.

## Properties

Property | Value
--- | ---
Label | FINDC
Routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FNUM | LITERAL | 30 | true | The file number of the content table.
IENS | LITERAL | 30 | true | The IENS of the main level or subfile level of the content table.
FLAGS | LITERAL | 30 | true | The FIND1^DIC lookup options.
FNDVALUE | LITERAL | 60 | true | The carat delimited lookup.  Each piece is the same as the subscript in the index.
XREF | LITERAL | 30 | true | The subscriber specified cross reference for the lookup.
SCREEN | LITERAL | 30 | true | The subscriber specified DIC(&quot;S&quot;) logic for the lookup.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}