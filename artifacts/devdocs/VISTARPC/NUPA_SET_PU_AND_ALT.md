---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA SET PU AND ALT<br/>
# NUPA SET PU AND ALT

Sets Pressure Ulcer and Skin Alteration data.  Deletes old info for this careplan and inserts from the reassessment.

## Properties

Property | Value
--- | ---
Label | SL
Routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ALT | LIST | 999 | true |  String List.   Piece 1 &#x3D; &quot;A&quot; for alterations or &quot;U&quot; for pressure ulcers Piece 2 &#x3D; CarePlan DA Piece 3 &#x3D; Text field 1 from the reassessment Piece 4 &#x3D; Text field 2 from the reassessment Piece 5 &#x3D; Text field 3 from the reassessment Piece 6 &#x3D; Comments number of Lines Piece 7 &#x3D; Comments Text Piece 8 &#x3D; A 1 if the alteration is healed



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}