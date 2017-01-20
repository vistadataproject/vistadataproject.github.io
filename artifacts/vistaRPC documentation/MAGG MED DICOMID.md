---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG MED DICOMID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG MED DICOMID{:/}
 tag | {::nomarkdown}DICOMID{:/}
 routine | [MAGGTMC1](http://code.osehra.org/dox/Routine_MAGGTMC1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns an ID, generated as a temporary way to link, flouroscopicimages captured by other system to images captured on thisworkstation.They will be linked by both being saved under the same Medicine procedure.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA = psien ^ dfn ^ mcien{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}