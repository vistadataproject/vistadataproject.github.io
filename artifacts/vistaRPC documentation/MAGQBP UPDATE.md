---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQBP UPDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQBP UPDATE{:/}
 tag | {::nomarkdown}PGEUD{:/}
 routine | [MAGQBPG2](http://code.osehra.org/dox/Routine_MAGQBPG2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Nulls the appropriate magnetic network location reference.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILENAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The Image file name to be updated.{:/} | 
| {::nomarkdown}EXT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The image file extension to be updated.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Image file internal entry number to be updated.{:/} | 
| {::nomarkdown}Device{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}'NET' or 'JB' to specify which Image system reference to update.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}