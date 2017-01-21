---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DDR FILER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DDR FILER{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This calls FILE^DIE to file data.  It can only file data at a single level (top, multiple, a multiple within a multiple, etc.).  It presumes you know how to set Param[x] properly in Fileman syntax.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the file number (or subfile number) for which data is to be filed.{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IENS parameter to the FILE^DIE call.   If you are filing data to a file at top level fields, then IENS must be <null>.   If you are filing data to a subfile entry then IENS must be properly defined.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the FLAGS parameter used when invoking FILE^DIE.If no value is passed, then the default value is \KE\{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an array of fields in format:  DATA(field_num)=value {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}