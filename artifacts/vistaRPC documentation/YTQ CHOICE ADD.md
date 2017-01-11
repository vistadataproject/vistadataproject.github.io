---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ CHOICE ADD 

 property | value 
--- | --- 
 label | YTQ CHOICE ADD
 tag | ADDCH
 routine | [YTQAPI4](http://code.osehra.org/dox/Routine_YTQAPI4_source.html)
 return value type | ARRAY
 description | This API is to be used to enter a new MH CHOICE 601.75. It searches for already present choices and if available returns that 601.75 ien. Also checked are non-case sensitive matches. Input: TEXT as text of the choice        FORCE: set as Y to force an add when there is a non case sensitive match Output: error and message or        601.75 ien added        Question Force returned when Force not equal Y and non case sensitive match found.




 ###### Generated on January 11th 2017, 6:39:43 am