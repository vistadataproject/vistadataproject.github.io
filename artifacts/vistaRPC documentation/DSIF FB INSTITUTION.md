---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF FB INSTITUTION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF FB INSTITUTION{:/}
 tag | {::nomarkdown}GETINST{:/}
 routine | [DSIFUTL](http://code.osehra.org/dox/Routine_DSIFUTL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Input Station number, return all populated fields in file #4.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STATION NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Station number lookup, using \D\ cross reference (FIELD 99) 1st, then by name field.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:54 am</p>{:/}