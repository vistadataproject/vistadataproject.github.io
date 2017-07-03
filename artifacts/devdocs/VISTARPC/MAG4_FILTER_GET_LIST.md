---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG4 FILTER GET LIST
# MAG4 FILTER GET LIST

Returns a list of Image FiltersEither for a specific user (Private filters)or Public filters.Some Public filters are distributed with the installation.Public filters can also be created by the Imaging site manager.

Property | Value
--- | ---
Label | GETLIST
Routine | [MAGGSFLT](http://code.osehra.org/dox/Routine_MAGGSFLT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL | 40 | true | This is DUZ, if &quot;&quot; is sent, then the RPC retrieves the Public filters.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}