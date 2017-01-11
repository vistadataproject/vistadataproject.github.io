---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA GET JUKEBOX WL 

 property | value 
--- | --- 
 label | MAGVA GET JUKEBOX WL
 tag | GETJBXWL
 routine | [MAGVAG03](http://code.osehra.org/dox/Routine_MAGVAG03_source.html)
 return value type | ARRAY
 description | Returns Jukebox Write Location by Station number or Institution IEN

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true |  MAGPARAM(\STATION NUMBER\) = STATION NUMBER field (#4,99) in INSTITUTION file (#4) or MAGPARAM(\INSTITUTION IEN\) = IEN in INSTITUTION file (#4) | 




Generated on January 11th 2017, 6:34:23 am