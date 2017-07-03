---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR LIST REGISTRY USERS
# ROR LIST REGISTRY USERS

The ROR GET REGISTRY USERS remote procedure returns the list of registry users (VistA users who have the appropriate security keys).

Property | Value
--- | ---
Label | USERLIST
Routine | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}