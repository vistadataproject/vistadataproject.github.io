---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCUT GET USER RECORD<br/>
# SCUT GET USER RECORD

This RPC returns user related data often needed by schedulingmodules. The data returned is used to set instance variablesfor the TScUser object type on the client.

## Properties

Property | Value
--- | ---
Label | GETUSER
Routine | [SCUTBK3](http://code.osehra.org/dox/Routine_SCUTBK3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUZ NUMBER | LITERAL | 20 | true | Internal entry number of the user.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}