---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN GET ADT DATA<br/>
# SPN GET ADT DATA

Returns ADT Patient Movement entries for the requested date(s).

## Properties

Property | Value
--- | ---
Label | COL
MUMPS Implementation | [SPNJRPPM](http://code.osehra.org/dox/Routine_SPNJRPPM_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLST | LITERAL |  |  | List of patient&#x27;s ICNs (ICN^ICN^ICN^ICN^ICN...)
ACTDATE | LITERAL |  |  | Date to begin ADT entry search from.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}