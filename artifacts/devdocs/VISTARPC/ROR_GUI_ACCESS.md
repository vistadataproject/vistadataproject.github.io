---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR GUI ACCESS<br/>
# ROR GUI ACCESS

The ROR ACCESS remote procedure returns a list of registries that the user has access to (the user has appropriate security keys).

## Properties

Property | Value
--- | ---
Label | ACREGLST
MUMPS Implementation | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  |  | User IEN in the NEW PERSON file. By default (if $G(USER)&#x27;&gt;0), the DUZ isused).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}