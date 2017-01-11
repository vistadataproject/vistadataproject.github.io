---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC POSITION MEMBERS 

 property | value 
--- | --- 
 label | SC POSITION MEMBERS
 tag | PSLST
 routine | [SCUTBK11](http://code.osehra.org/dox/Routine_SCUTBK11_source.html)
 return value type | ARRAY
 description | Returns an array of positions.  For each position, the standard role,team member currently filling, and the preceptor (if any) for the team member.   Returns both Internal and external values.Piece 1:  Team Ien|TAB|  2:  Position Ien|TAB|  3:  Team member Ien (File #200)|TAB|  4:  Team member's name      5:  Precpetor's Ien (File #200)|TAB|  6:  Preceptor's Name|TAB|  7:  Primary Care role (if any) for position.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LIST ATTRIBUTES | LIST | 512 | true |    DFN  : Patient's dfn   BEGIN:   Beginning date range   END  :   Ending date range | 