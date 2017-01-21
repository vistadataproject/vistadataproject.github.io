---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG FILEMAN FIELD ATTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG FILEMAN FIELD ATTS{:/}
 tag | {::nomarkdown}FIELDATT{:/}
 routine | [MAGUFFLA](http://code.osehra.org/dox/Routine_MAGUFFLA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure returns a list of attributes and attribute values for a field in a FileMan file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILENO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of a FileMan file or subfile.{:/} | 
| {::nomarkdown}FIELDNO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the field within the specified FileMan file or subfile for which attributes are being requested.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}