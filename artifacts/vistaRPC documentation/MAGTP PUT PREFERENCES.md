---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGTP PUT PREFERENCES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGTP PUT PREFERENCES{:/}
 tag | {::nomarkdown}PUTUPREF{:/}
 routine | [MAGTP011](http://code.osehra.org/dox/Routine_MAGTP011_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Set the user's setting/configuration preferences in XML format in the configuration file (#2006.13){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENT{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Input array:First Line:      DUZ^LABELFollowing Lines: One XML line of textIf DUZ is null, default to current DUZ{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:54 am</p>{:/}