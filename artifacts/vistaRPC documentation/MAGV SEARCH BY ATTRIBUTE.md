---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV SEARCH BY ATTRIBUTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV SEARCH BY ATTRIBUTE{:/}
 tag | {::nomarkdown}FINDBYAT{:/}
 routine | [MAGVRS42](http://code.osehra.org/dox/Routine_MAGVRS42_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure accepts an array of one or more name-value pairsof FileMan field names and exact match values, and returns a list ofinternal entry numbers of matching entries.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SEND{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of name-value pairs of field names and exact match values.{:/} | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the FileMan file to be searched (e.g., 2005.61 forIMAGING PROCEDURE REFERENCE).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}