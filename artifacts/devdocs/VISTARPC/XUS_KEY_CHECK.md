---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS KEY CHECK<br/>
# XUS KEY CHECK

This API will check if the user (DUZ) holds a security key or an array ofkeys.If a single security KEY is sent the result is returned in R(0).If an array is sent down then the return array has the same order as thecalling array.

## Properties

Property | Value
--- | ---
Label | OWNSKEY
Routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
KEY | LIST | 30 | true | If key is a single value it holds the one key to check.If key is an array then the result is an array that matches the keylist with values that match the status of the key check for each key.The return is a 1 if the user has the key and 0 if not.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}