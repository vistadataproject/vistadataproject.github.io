---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG IS DOC CLASS
# MAGG IS DOC CLASS

Checks to see if IEN of TIU Files 8925 or 8925.1 is of a certain Doc Class

Property | Value
--- | ---
Label | ISDOCCL
Routine | [MAGGNTI](http://code.osehra.org/dox/Routine_MAGGNTI_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 30 | true | Internal Entry Number in the TIUFILE
TIUFILE | LITERAL | 10 | true |  IS - 8925   if we need to see if a Note is of a Document Class IS - 8925.1 if we need to see if a Title is of a Document Class
CLASS | LITERAL | 60 | true | Text Name of the Document Class   example: &quot;ADVANCE DIRECTIVE&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}