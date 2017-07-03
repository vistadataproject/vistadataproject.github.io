---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF SEARCH
# DSIF SEARCH

Used to search Fee Basis authorizations based on from and to dates.on error returns-1^error message

Property | Value
--- | ---
Label | SEARCH
Routine | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROMDT | LITERAL | 7 | true | Pass in FM date of Authorizations to start search 
TODATE | LITERAL | 7 | true | Pass in FM date of Authorizations to end search



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}