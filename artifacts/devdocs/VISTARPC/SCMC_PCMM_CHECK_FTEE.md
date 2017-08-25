---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCMC PCMM CHECK FTEE<br/>
# SCMC PCMM CHECK FTEE

Determine if provider has exceeded 1.0 FTEE

## Properties

Property | Value
--- | ---
Label | FTEECHK
MUMPS Implementation | [SCMCTSK1](http://code.osehra.org/dox/Routine_SCMCTSK1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SCPATCH | LITERAL | 60 | true | PatchVersion ^ ClientVersion
TPIEN | LITERAL |  | true | POSITION ASSIGNMENT HISTORY IEN ^ FTEE VALUE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}