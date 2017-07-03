---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETVISITINFO
# EC GETVISITINFO

This broker call returns specific EC patient visit data (location, DSS Unit,patient ien, etc) based on a Visit Number.

Property | Value
--- | ---
Label | VISINFO
Routine | [ECUERPC2](http://code.osehra.org/dox/Routine_ECUERPC2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | The value ECARY contains the Visit Number IEN (ECVSN), found in file (#9000010).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}