---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG FILEMAN FIELD LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG FILEMAN FIELD LIST{:/}
 tag | {::nomarkdown}FIELDLST{:/}
 routine | [MAGUFFLL](http://code.osehra.org/dox/Routine_MAGUFFLL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure returns a list of fields from a FileMan file or subfile in either alpha or numeric order.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILENO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of a FileMan file or subfile.{:/} | 
| {::nomarkdown}ORDER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the desired return order for the field list:  either A for alpha or N for numeric.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}