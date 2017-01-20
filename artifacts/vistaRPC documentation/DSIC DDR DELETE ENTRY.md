---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DDR DELETE ENTRY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DDR DELETE ENTRY{:/}
 tag | {::nomarkdown}KILL{:/}
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will delete a record from a file or subfile.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file or subfile of the record to be deleted{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Fileman IENS input parameter.  Its value must be applicable to the file or subfile for which a record is being deleted.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}