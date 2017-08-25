---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SC POSITION MEMBERS<br/>
# SC POSITION MEMBERS

Returns an array of positions.  For each position, the standard role,team member currently filling, and the preceptor (if any) for the team member.   Returns both Internal and external values.Piece 1:  Team Ien|TAB|  2:  Position Ien|TAB|  3:  Team member Ien (File #200)|TAB|  4:  Team member's name      5:  Precpetor's Ien (File #200)|TAB|  6:  Preceptor's Name|TAB|  7:  Primary Care role (if any) for position.

## Properties

Property | Value
--- | ---
Label | PSLST
MUMPS Implementation | [SCUTBK11](http://code.osehra.org/dox/Routine_SCUTBK11_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LIST ATTRIBUTES | LIST | 512 | true |    DFN  : Patient&#x27;s dfn   BEGIN:   Beginning date range   END  :   Ending date range



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}