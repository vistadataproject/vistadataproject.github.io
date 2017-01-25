---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV GET CLEAN SLATE LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV GET CLEAN SLATE LIST{:/}
 tag | {::nomarkdown}GETCSL{:/}
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of all clean slates applied to a patient.   Return example: RETURN(1)=\1^Dates found\                   RETURN(2)=3100101.120345   OR              RETURN(1)=\-1^No clean slate present\{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DPAT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The patient IEN.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}