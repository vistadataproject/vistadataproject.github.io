---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCUT SET USER QUERY DEFAULT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCUT SET USER QUERY DEFAULT{:/}
 tag | {::nomarkdown}SETDEF{:/}
 routine | [SCUTBK3](http://code.osehra.org/dox/Routine_SCUTBK3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to set or change the user's defualt PCMMquery template.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the user (DUZ).{:/} | 
| {::nomarkdown}QUERY ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of query template(#404.95) that the userselected as his/her default.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}