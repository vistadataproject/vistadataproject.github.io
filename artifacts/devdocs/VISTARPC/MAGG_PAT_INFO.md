---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG PAT INFO<br/>
# MAGG PAT INFO

Returns a string of '^' delimited pieces of patient information.

## Properties

Property | Value
--- | ---
Label | INFO
Routine | [MAGGTPT1](http://code.osehra.org/dox/Routine_MAGGTPT1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 90 | true |     DATA:  MAGDFN ^ NOLOG ^ ISICN       MAGDFN -- Patient DFN       NOLOG  -- 0/1; if 1, then do NOT update the Session log       ISICN  -- 0/1  if 1, then this is an ICN,       FLAGS  -- &quot;D&quot; Include Deleted images    if 0 (default) this is a DFN ; Patch 41



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}