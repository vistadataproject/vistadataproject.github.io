---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC GETECSCATS<br/>
# EC GETECSCATS

Returns an array of categories for an Event Code screen based on a specificlocation and DSS unit.

## Properties

Property | Value
--- | ---
Label | CAT
MUMPS Implementation | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrow.  1. ECL  - Location IEN  2. ECD  - DSS Unit IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}