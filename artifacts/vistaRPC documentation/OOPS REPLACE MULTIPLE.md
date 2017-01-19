---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS REPLACE MULTIPLE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS REPLACE MULTIPLE{:/}
 tag | {::nomarkdown}REPLMULT{:/}
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This procedure is for updating entries in a multiple, in 2 stages.Stage 1 deletes all current entries, step 2 creates new entries using data passed back from the GUI form.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SINGLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the file, field, and IEN of the data to be filed in the format FILE^FIELD^IEN.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the data to be filed in the multiple.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}