---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTQ CHOICE ADD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTQ CHOICE ADD{:/}
 tag | {::nomarkdown}ADDCH{:/}
 routine | [YTQAPI4](http://code.osehra.org/dox/Routine_YTQAPI4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API is to be used to enter a new MH CHOICE 601.75. It searches for already present choices and if available returns that 601.75 ien. Also checked are non-case sensitive matches. Input: TEXT as text of the choice        FORCE: set as Y to force an add when there is a non case sensitive match Output: error and message or        601.75 ien added        Question Force returned when Force not equal Y and non case sensitive match found.{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}