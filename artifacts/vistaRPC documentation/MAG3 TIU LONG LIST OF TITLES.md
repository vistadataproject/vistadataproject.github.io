---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TIU LONG LIST OF TITLES 

 property | value 
--- | --- 
 label | MAG3 TIU LONG LIST OF TITLES
 tag | LIST
 routine | [MAGGNTI2](http://code.osehra.org/dox/Routine_MAGGNTI2_source.html)
 return value type | ARRAY
 description | For the Document Class that is input, get a list of Progress Note titles

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLASS | LITERAL | 100 | true | \,\ Delimited list of Classes to get the list of Note Titles for. | 
| MYLIST | LITERAL | 30 | true | If '1', then return list of 'Users' TIU Titles.If '0' or null, then return long list of titles. | 