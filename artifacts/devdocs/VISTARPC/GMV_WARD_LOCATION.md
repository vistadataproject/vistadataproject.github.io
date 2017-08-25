---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV WARD LOCATION<br/>
# GMV WARD LOCATION

This procedure extracts MAS ward locations from the Ward Location file(#42). Note: No other Input Parameters besides RESULT needed.

## Properties

Property | Value
--- | ---
Label | WARDLOC
MUMPS Implementation | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUMMY | LITERAL | 1 | true | When this input parameter is set to the letter &quot;P&quot;, only wards that have patients will be returned. Otherwise, all active wards will be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}