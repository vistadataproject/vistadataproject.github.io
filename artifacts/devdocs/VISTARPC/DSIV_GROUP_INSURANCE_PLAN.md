---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV GROUP INSURANCE PLAN<br/>
# DSIV GROUP INSURANCE PLAN

Looks up Group Insurance Plan name and returns match or matchesor error message.

## Properties

Property | Value
--- | ---
Label | GRPPOL
Routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL | 30 | true | Group Insurance Plan name to match.
FIELDS | LITERAL | 245 |  | Field list to return in standard FileMan format.  Defaults to     &quot;@;.03;.01I;.01&quot;
VDT | LITERAL | 14 |  | Visit Date.Time for policy limitations (coverage) data.Defaults to TODAY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}