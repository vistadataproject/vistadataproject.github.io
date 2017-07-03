---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SCUT GET USER RECORD
# SCUT GET USER RECORD

This RPC returns user related data often needed by schedulingmodules. The data returned is used to set instance variablesfor the TScUser object type on the client.

Property | Value
--- | ---
Label | GETUSER
Routine | [SCUTBK3](http://code.osehra.org/dox/Routine_SCUTBK3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUZ NUMBER | LITERAL | 20 | true | Internal entry number of the user.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}