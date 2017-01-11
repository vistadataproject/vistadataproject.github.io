---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCUT SET USER QUERY DEFAULT 

 property | value 
--- | --- 
 label | SCUT SET USER QUERY DEFAULT
 tag | SETDEF
 routine | [SCUTBK3](http://code.osehra.org/dox/Routine_SCUTBK3_source.html)
 return value type | ARRAY
 description | This RPC is used to set or change the user's defualt PCMMquery template.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER NUMBER | LITERAL | 20 | true | Internal entry number of the user (DUZ). | 
| QUERY ID | LITERAL | 20 | true | Internal entry number of query template(#404.95) that the userselected as his/her default. | 