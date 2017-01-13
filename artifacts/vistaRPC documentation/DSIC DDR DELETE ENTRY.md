---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DDR DELETE ENTRY 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DDR DELETE ENTRY{:/}
 tag | {::nomarkdown}KILL{:/}
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will delete a record from a file or subfile.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file or subfile of the record to be deleted{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Fileman IENS input parameter.  Its value must be applicable to the file or subfile for which a record is being deleted.{:/} | 




 Generated on January 13th 2017, 6:44:47 am