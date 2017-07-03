---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR GUI ACCESS
# ROR GUI ACCESS

The ROR ACCESS remote procedure returns a list of registries that the user has access to (the user has appropriate security keys).

Property | Value
--- | ---
Label | ACREGLST
Routine | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  |  | User IEN in the NEW PERSON file. By default (if $G(USER)&#x27;&gt;0), the DUZ isused).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}