---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB FETCH 1U4N<br/>
# DVBAB FETCH 1U4N

Retrieve the 1u4n field for the list of patient IENSprovided as the only argument.  Each IEN will besent back with field .0905 appended after a caret.

## Properties

Property | Value
--- | ---
Label | U1N4
Routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ARR | LIST |  | true | List of patient IENs



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}