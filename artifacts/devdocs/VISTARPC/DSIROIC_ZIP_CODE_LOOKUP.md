---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIROIC ZIP CODE LOOKUP
# DSIROIC ZIP CODE LOOKUP

Looks up location information, city, state, and county based on inputted zip code.

Property | Value
--- | ---
Label | ZIP
Routine | [DSIROIC](http://code.osehra.org/dox/Routine_DSIROIC_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PCODE | LITERAL | 10 | true | PCODE - required - 5 or 9 digit zip code - must be a string
ACTDATE | LITERAL | 7 | true | ACTDATE - optional - Fileman date for which the zip code must have beenactive - default is to ignore date sndn return all.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}