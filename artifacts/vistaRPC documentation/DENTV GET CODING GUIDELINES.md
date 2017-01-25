---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV GET CODING GUIDELINES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV GET CODING GUIDELINES{:/}
 tag | {::nomarkdown}GUIDE{:/}
 routine | [DENTVRP2](http://code.osehra.org/dox/Routine_DENTVRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Gets the admin and coding guidelines for an ADA/CPT code.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ADA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The external ADA or CPT code.ADA or CPT code{:/} | 
| {::nomarkdown}ADMG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Set to 1 to include Admin guidelines with the Coding Guidelines.  Set to 0 to send only Coding Guidelines.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}