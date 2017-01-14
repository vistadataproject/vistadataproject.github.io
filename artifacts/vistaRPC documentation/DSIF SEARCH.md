---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF SEARCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF SEARCH{:/}
 tag | {::nomarkdown}SEARCH{:/}
 routine | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used to search Fee Basis authorizations based on from and to dates.on error returns-1^error message{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROMDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in FM date of Authorizations to start search {:/} | 
| {::nomarkdown}TODATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in FM date of Authorizations to end search{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}