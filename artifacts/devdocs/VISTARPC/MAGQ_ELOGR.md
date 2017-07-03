---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQ ELOGR
# MAGQ ELOGR

This provides a method of capturing errors logged during the purgeprocess.  This function provides a list which can be examined at a laterdate and will be rolled into the purge log file on the BP Server which performed the purge.

Property | Value
--- | ---
Label | ELOGR
Routine | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NULL |  |  | true | No input parameter is defined.
LIMIT | LITERAL | 5 | true | This value is used to control the array size.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}