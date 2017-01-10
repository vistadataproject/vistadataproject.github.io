---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ CHOICETYPE DELETE 

 property | value 
--- | --- 
 label | YTQ CHOICETYPE DELETE
 tag | CTDEL
 routine | [YTQAPI4](http://code.osehra.org/dox/Routine_YTQAPI4_source.html)
 return value type | ARRAY
 description | This API will safely delete all 601.751 enteries of the choicetype presented. This API will not allow deletions of Choicetypes referrefd to in the MH Question file (601.72)         Input: CHOICETYPE        Output: DELETED if sucessful                LIST OF question iens if in use