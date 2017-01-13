---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; NUPA WP SET 

 property | value 
--- | --- 
 label | {::nomarkdown}NUPA WP SET{:/}
 tag | {::nomarkdown}WPSET{:/}
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets data into a word processing field.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}File to insert the data into, in ^FILE(subscript, format.{:/} | 
| {::nomarkdown}LINE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Line number for the data to be put into, such as 1, 2, or 3.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Data (text) to insert into the global.{:/} | 




 Generated on January 13th 2017, 6:44:48 am