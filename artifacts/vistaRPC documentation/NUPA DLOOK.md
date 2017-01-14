---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; NUPA DLOOK 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}NUPA DLOOK{:/}
 tag | {::nomarkdown}DLOOK{:/}
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Does a lookup on the B Xref of a file, and does not convert dates orpointers.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}File number to do the lookup on.{:/} | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Value to lookup.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Type of file to lookup - variable pointer or date.{:/} | 
| {::nomarkdown}SCR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Fileman screen for the lookup.{:/} | 
| {::nomarkdown}IND{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Index to lookup the data on.{:/} | 




 Generated on January 14th 2017, 7:26:36 am