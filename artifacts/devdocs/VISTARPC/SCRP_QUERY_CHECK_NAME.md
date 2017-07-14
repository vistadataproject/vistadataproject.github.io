---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCRP QUERY CHECK NAME<br/>
# SCRP QUERY CHECK NAME

This RPC checks to see if the user already has a querywith the name being passed in as part of the RPC.If there is already a query with the same name, the RPCpasses back the internal entry number of the RPC, otherwisethe RPC passes back a 0.

## Properties

Property | Value
--- | ---
Label | NAME
Routine | [SCRPBK2](http://code.osehra.org/dox/Routine_SCRPBK2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
QUERY NAME | LITERAL | 30 | true | Name of the query that needs to be checked for existence.
USER | LITERAL | 30 | true | Internal entry number of user that the query namewill be assoicated with, usually DUZ.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}