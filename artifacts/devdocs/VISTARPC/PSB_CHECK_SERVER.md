---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB CHECK SERVER<br/>
# PSB CHECK SERVER

Returns -1 or 1 when checking for patches and build on the server.

## Properties

Property | Value
--- | ---
Label | CHECK
MUMPS Implementation | [PSBUTL](http://code.osehra.org/dox/Routine_PSBUTL_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBWHAT | LIST |  | true | B &#x3D; Returns Build Version for packages by NamespaceP &#x3D; Returns if Patch is installed
PSBDATA | LIST |  | true | Build/Package namespace (i.e. PSB) or Patch Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}