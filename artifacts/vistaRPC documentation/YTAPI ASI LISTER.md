---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTAPI ASI LISTER 

 property | value 
--- | --- 
 label | YTAPI ASI LISTER
 tag | LISTASI
 routine | [YTAPI8](http://code.osehra.org/dox/Routine_YTAPI8_source.html)
 return value type | ARRAY
 description | This API lists all ASI administrations for a specified patient.Input required: DFN (ien of file 2)Output is in the following format: YSDATA(1)=[DATA]YSDATA(2)= IEN^DATE OF INTERVIEW^CLASS^SPECIAL^ESIGNED..YSDATA(X)= IEN^DATE OF INTERVIEW^CLASS^SPECIAL^ESIGNED 0 RETURNED IF NO ADMINS