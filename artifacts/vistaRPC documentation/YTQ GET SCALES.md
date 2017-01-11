---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ GET SCALES 

 property | value 
--- | --- 
 label | YTQ GET SCALES
 tag | SCALEG
 routine | [YTQAPI3](http://code.osehra.org/dox/Routine_YTQAPI3_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a list of scale for a given test in order of their scale groups. Input: CODE: alphabetic 601.71 entryOutput: [DATA] vs [Error] GroupX= SCALEGROUP ID^INSTRUMENT NAME^SCALEGROUP NAME^       GROUP SEQUENCE^ORDINATE TITLE^MIN^INCREMENT^MAX^GRID1^GRID2^GRID3          Scalex= SCALE ID^SCALEGROUP ID^SCALE SEQUENCE^SCALE NAME^XLABEL   Output is sorted by Scale Group Sequence and Scale Sequence




 Generated on January 11th 2017, 7:15:04 am