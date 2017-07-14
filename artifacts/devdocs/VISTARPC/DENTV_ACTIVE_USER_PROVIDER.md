---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV ACTIVE USER PROVIDER<br/>
# DENTV ACTIVE USER PROVIDER

Returns a list of active users matching the lookup value.  If a matching user is not active, but has the XUORES security key, then they are valid providers and will also be returned by this call.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAL | LITERAL | 50 | true | The lookup value entered by the user to find matches against the NEW USER file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}