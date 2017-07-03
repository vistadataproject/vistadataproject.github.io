---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SCMC PCMM CHECK FTEE
# SCMC PCMM CHECK FTEE

Determine if provider has exceeded 1.0 FTEE

Property | Value
--- | ---
Label | FTEECHK
Routine | [SCMCTSK1](http://code.osehra.org/dox/Routine_SCMCTSK1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SCPATCH | LITERAL | 60 | true | PatchVersion ^ ClientVersion
TPIEN | LITERAL |  | true | POSITION ASSIGNMENT HISTORY IEN ^ FTEE VALUE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}