---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTQ DELETE ENTRY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTQ DELETE ENTRY{:/}
 tag | {::nomarkdown}DELENTRY{:/}
 routine | [YTQAPI6](http://code.osehra.org/dox/Routine_YTQAPI6_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Deletes an entry from a file.  Input: YSDATA=Array name to return success/error response       YS(\FILE\)=File number (e.g., 627.8)       YS(\IEN\)=record internal entry number (e.g., 100123)  Output: YSDATA(1)=\[DATA]\        or        YSDATA(1)=\[ERROR]\        YSDATA(2)=\error message\ Example: > S YSDATA=\TEST\,YS(\FILE\)=627.8,YS(\IEN\)=100123 > D DELENTRY^YTQAPI6(.YSDATA,.YS){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}