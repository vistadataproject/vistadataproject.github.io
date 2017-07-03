---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DDR FILER
# DDR FILER

Generic call to file edits into FM file.

Property | Value
--- | ---
Label | FILEC
Routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
EDIT RESULTS | LIST | 512 | true | Results of editing to be placed in FDA array by broker.
EDIT MODE | LITERAL | 3 | true | Is processing in edit or add data mode.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}