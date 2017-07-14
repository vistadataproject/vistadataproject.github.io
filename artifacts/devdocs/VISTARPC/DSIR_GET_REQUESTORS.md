---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR GET REQUESTORS<br/>
# DSIR GET REQUESTORS

THIS RPC WILL RETURN ALL REQUESTORS THAT MEET ONE OF THE FOLLOWING CRITERIA: THE REQUESTORS LAST NAME STARTS WITH THE CHARACTERS IN THE FIRST INPUT PARAMETER AND THE SECOND PARAMETER IS AN "L" OR  THE REQUESTORS CORPORATE NAME STARTS WITH THE CHARACTERS IN THE FIRSTINPUT PARAMETER AND THE SECOND PARAMETER IS A "C"L"

## Properties

Property | Value
--- | ---
Label | GTREQSTR
Routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PREF | LITERAL | 30 | true | PREF - FIRST PART OF THE REQUESTOR NAME(S) BEING SEARCHED FOR
STYP | LITERAL | 1 | true | STYP - &quot;L&quot; - USE THE &quot;AC&quot; INDEX FOR LAST NAME         &quot;C&quot; - USE THE &quot;AD&quot; INDEX FOR CORPORATE NAME



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}