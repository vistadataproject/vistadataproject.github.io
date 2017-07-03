---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETPXLST
# EC GETPXLST

Performs a search on a procedure string and returns an array list of matchesfrom file #81 and/or #725.User can type     1.  "A.search string" to search file 81.    2.  "B.search string" to search file 725.    3.  "search string" to search both files.

Property | Value
--- | ---
Label | PXFND
Routine | [ECUMRPC2](http://code.osehra.org/dox/Routine_ECUMRPC2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Procedure search string.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}