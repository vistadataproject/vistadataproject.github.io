---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTQ GET SCALES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTQ GET SCALES{:/}
 tag | {::nomarkdown}SCALEG{:/}
 routine | [YTQAPI3](http://code.osehra.org/dox/Routine_YTQAPI3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of scale for a given test in order of their scale groups. Input: CODE: alphabetic 601.71 entryOutput: [DATA] vs [Error] GroupX= SCALEGROUP ID^INSTRUMENT NAME^SCALEGROUP NAME^       GROUP SEQUENCE^ORDINATE TITLE^MIN^INCREMENT^MAX^GRID1^GRID2^GRID3          Scalex= SCALE ID^SCALEGROUP ID^SCALE SEQUENCE^SCALE NAME^XLABEL   Output is sorted by Scale Group Sequence and Scale Sequence{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}