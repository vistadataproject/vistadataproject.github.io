---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV GETS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV GETS{:/}
 tag | {::nomarkdown}GETS{:/}
 routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns details of INSURANCE BUFFER file entry.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INSURANCE BUFFER file internal entry number or IENS.{:/} | 
| {::nomarkdown}FIELDS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}240{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Field list (optional).  Default is all top-level fields.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flags (optional).  Default is external format, omit empty fields.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}