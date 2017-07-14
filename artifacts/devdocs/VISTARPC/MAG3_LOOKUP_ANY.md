---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG3 LOOKUP ANY<br/>
# MAG3 LOOKUP ANY

Lookup using FIND^DIC for general purpose file lookup.

## Properties

Property | Value
--- | ---
Label | LKP
Routine | [MAGGNLKP](http://code.osehra.org/dox/Routine_MAGGNLKP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ZYx | LITERAL | 256 | true |         ; ZY is parameter sent by calling app (Delphi)        ;    FILE NUM ^ NUM TO RETURN ^ TEXT TO MATCH ^  ^ SCREEN ($P 5-99)
MAGIN | LITERAL | 200 | true | MAGIN is parameter sent by calling app (Delphi) FILE NUM ^ NUM TO RETURN ^ TEXT TO MATCH ^ FIELDS ^ SCREEN ($P 5-99)
DATA | LITERAL | 40 | true | |TAB|; DATA : |TAB|;  LVIEW &#x3D;Piece 1 |TAB|;     +LVIEW &#x3D; 1  :  |TAB|;          result array is formatted for a magListView control|TAB|;              i.e.  ^ delimiter for data and &quot;|&quot; delimiter for IEN|TAB|;     +LVIEW &#x3D; 0  : |TAB|;         old way,  &quot;  &quot; delim for data and &#x27;^&#x27; delim for IEN|TAB|;  INDX &#x3D; Piece 2|TAB|;                       This is the index to search |TAB|;                       Defaults to &quot;B&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}