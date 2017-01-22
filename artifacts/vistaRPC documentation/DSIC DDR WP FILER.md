---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DDR WP FILER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DDR WP FILER{:/}
 tag | {::nomarkdown}WP{:/}
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will file the text into the specified word processing field.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the file (or subfile) number for which the word processing field belongs.{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the appropriate Fileman DBS IENS for filing the word processing field{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is field number of the word processing field{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the FLAGS parameter for the WP^DIE call.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the text to be filed into the word processing field.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}