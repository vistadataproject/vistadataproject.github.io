---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD USER PARAMETERS<br/>
# KMPD USER PARAMETERS

Set/Get gui option info.

## Properties

Property | Value
--- | ---
Label | USRPARAM
Routine | [KMPDU6](http://code.osehra.org/dox/Routine_KMPDU6_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUZ | LITERAL | 35 | true | User&#x27;s DUZ.
TYPE | LITERAL | 5 | true | Type of call: 1 - get option info              2 - set option info
OPTION | LIST | 256 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}