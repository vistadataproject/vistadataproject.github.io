---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIROIC ZIP CODE LOOKUP<br/>
# DSIROIC ZIP CODE LOOKUP

Looks up location information, city, state, and county based on inputted zip code.

## Properties

Property | Value
--- | ---
Label | ZIP
Routine | [DSIROIC](http://code.osehra.org/dox/Routine_DSIROIC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PCODE | LITERAL | 10 | true | PCODE - required - 5 or 9 digit zip code - must be a string
ACTDATE | LITERAL | 7 | true | ACTDATE - optional - Fileman date for which the zip code must have beenactive - default is to ignore date sndn return all.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}