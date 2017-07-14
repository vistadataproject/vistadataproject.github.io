---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB ZIP2CITY<br/>
# DVBAB ZIP2CITY

The remote procedure returns a list containing city, county, and state fora given ZIP code.Results format:  Result(0)=ResultCount_"^"_ErrorMsg                 Result(1..n)=City_"^"_County_"^"_State

## Properties

Property | Value
--- | ---
Label | ZIP2CITY
Routine | [DVBABADR](http://code.osehra.org/dox/Routine_DVBABADR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBZIP | LITERAL | 12 | true | ZIP code value in ZIP+4 format.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}