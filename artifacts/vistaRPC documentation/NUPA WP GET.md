---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA WP GET 

 property | value 
--- | --- 
 label | {::nomarkdown}NUPA WP GET{:/}
 tag | {::nomarkdown}WPGET{:/}
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns data from a Word Processing field.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}File to get the data from, in ^FILE(subscript, format.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Line number for the data to be put into, in number_\,\ formatsuch as \1,\.{:/} | 
| {::nomarkdown}NODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Node in the global to pull the data from, such as node 2.{:/} | 




 Generated on January 13th 2017, 6:55:29 am