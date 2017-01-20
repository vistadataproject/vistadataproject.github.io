---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA GET JUKEBOX WL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA GET JUKEBOX WL{:/}
 tag | {::nomarkdown}GETJBXWL{:/}
 routine | [MAGVAG03](http://code.osehra.org/dox/Routine_MAGVAG03_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns Jukebox Write Location by Station number or Institution IEN{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\STATION NUMBER\) = STATION NUMBER field (#4,99) in INSTITUTION file (#4) or MAGPARAM(\INSTITUTION IEN\) = IEN in INSTITUTION file (#4){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}