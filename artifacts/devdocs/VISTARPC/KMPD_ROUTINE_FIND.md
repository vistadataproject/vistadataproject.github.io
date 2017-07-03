---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; KMPD ROUTINE FIND
# KMPD ROUTINE FIND

Return list of routine names.

Property | Value
--- | ---
Label | ROUFIND
Routine | [KMPDU2](http://code.osehra.org/dox/Routine_KMPDU2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL | 30 | true | Routine name to search for (may contain an asterisk (*) for a list).
PARAM2 | LITERAL | 60 | true | Temporary global storage name.  Must be either ^TMP or ^UTILITY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}