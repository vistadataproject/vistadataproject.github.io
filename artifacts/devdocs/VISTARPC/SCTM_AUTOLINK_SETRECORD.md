---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCTM AUTOLINK SETRECORD<br/>
# SCTM AUTOLINK SETRECORD

This API sets the list of autolinks for a team.

## Properties

Property | Value
--- | ---
Label | SETREC
Routine | [SCAPMCU3](http://code.osehra.org/dox/Routine_SCAPMCU3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LIST OF AUTOLINKS | LIST |  | true | List of entities autolinked to the team.Each subscript in the array will have the following structure:Piece--------1- AutoLink Display Text2- Autolink Type3- AutoLink Entity IENNormally, the display text value is the .01 field but when more identifyinginformation is needed, then this string could contain more.
TEAM | LITERAL | 20 | true | Pointer to entry in Team file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}