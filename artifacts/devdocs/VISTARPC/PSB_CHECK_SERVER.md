---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PSB CHECK SERVER
# PSB CHECK SERVER

Returns -1 or 1 when checking for patches and build on the server.

Property | Value
--- | ---
Label | CHECK
Routine | [PSBUTL](http://code.osehra.org/dox/Routine_PSBUTL_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBWHAT | LIST |  | true | B &#x3D; Returns Build Version for packages by NamespaceP &#x3D; Returns if Patch is installed
PSBDATA | LIST |  | true | Build/Package namespace (i.e. PSB) or Patch Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}