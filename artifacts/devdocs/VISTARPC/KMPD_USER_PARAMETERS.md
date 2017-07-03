---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; KMPD USER PARAMETERS
# KMPD USER PARAMETERS

Set/Get gui option info.

Property | Value
--- | ---
Label | USRPARAM
Routine | [KMPDU6](http://code.osehra.org/dox/Routine_KMPDU6_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUZ | LITERAL | 35 | true | User&#x27;s DUZ.
TYPE | LITERAL | 5 | true | Type of call: 1 - get option info              2 - set option info
OPTION | LIST | 256 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}