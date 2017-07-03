---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB ZIP2CITY
# DVBAB ZIP2CITY

The remote procedure returns a list containing city, county, and state fora given ZIP code.Results format:  Result(0)=ResultCount_"^"_ErrorMsg                 Result(1..n)=City_"^"_County_"^"_State

Property | Value
--- | ---
Label | ZIP2CITY
Routine | [DVBABADR](http://code.osehra.org/dox/Routine_DVBABADR_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBZIP | LITERAL | 12 | true | ZIP code value in ZIP+4 format.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}