---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWGN MAXFRQ 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGN MAXFRQ{:/}
 tag | {::nomarkdown}MAXFRQ{:/}
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC checks if the frequency of an ICD-10 search term is than the maximum allowed ICD-10 return values.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Checks if frequency of search term is greater than
 Leading comment lines | {::nomarkdown}max ICD-10 setting<br/>Input Value: ORTRM = Search term to look up<br/>Return Value: 2 pieces (first piece is 0 or 1, second piece is<br/>occurrance frequency of search term)<br/>First piece:<br/>0 - Search term frequency is less than<br/>maximum return<br/>1 - Search term frequency is greater<br/>than maximum return{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORTRM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the search term to be looked up.{:/} | 




 Generated on January 13th 2017, 6:24:32 am