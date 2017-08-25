---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC GETUSRDSSUNIT<br/>
# EC GETUSRDSSUNIT

Returns an array of DSS units for which the user has access.

## Properties

Property | Value
--- | ---
Label | USRUNT
MUMPS Implementation | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | The input variable ECARY contains a value from the location or New Person file.   1. ECL   - Location IEN, #4(if define gives User&#x27;s DSS units for a location)   2. ECDUZ - New Person IEN, #200 (if define gives list of DSS Units available              to user)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}