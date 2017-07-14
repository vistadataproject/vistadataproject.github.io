---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD ROUTINE FIND<br/>
# KMPD ROUTINE FIND

Return list of routine names.

## Properties

Property | Value
--- | ---
Label | ROUFIND
Routine | [KMPDU2](http://code.osehra.org/dox/Routine_KMPDU2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL | 30 | true | Routine name to search for (may contain an asterisk (*) for a list).
PARAM2 | LITERAL | 60 | true | Temporary global storage name.  Must be either ^TMP or ^UTILITY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}