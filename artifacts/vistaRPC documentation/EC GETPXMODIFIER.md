---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETPXMODIFIER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETPXMODIFIER{:/}
 tag | {::nomarkdown}ECPXMOD{:/}
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns CPT modifier entries for a CPT Procedure based on procedure date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Input variable ECARY contains the following values separated by up-arrows.  1. ECCPT - CPT code ien (file #81)  2. ECDT  - Procedure date and time (fileman format){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}