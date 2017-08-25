---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG REASON GET PROPERTIES<br/>
# MAGG REASON GET PROPERTIES

This remote procedure returns the reason properties from the MAG REASONfile (#2005.88)

## Properties

Property | Value
--- | ---
Label | GET
MUMPS Implementation | [MAGGA01](http://code.osehra.org/dox/Routine_MAGGA01_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RSNID | LITERAL |  | true | Identifier of the reason: Internal Entry Number of the record in the MAGREASON file (#2005.88) or the reason code (see the FLAGS parameter).
FLAGS | LITERAL |  |  | Flags that control execution (can be combined):   C  By default, value of the RSNID parameter is treated as     the reason IEN. If this flag is provided, then the reason     code should be passed as the value of the RSNID.   F  Include full details (description text). By default, only     the summary data is returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}