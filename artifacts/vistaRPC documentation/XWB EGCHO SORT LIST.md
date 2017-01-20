---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB EGCHO SORT LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XWB EGCHO SORT LIST{:/}
 tag | {::nomarkdown}SRT{:/}
 routine | [XWBZ1](http://code.osehra.org/dox/Routine_XWBZ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Sorts a given numeric array, starting from HI or LOIt exists for support of EGcho - Broker demonstration program.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIRECTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The string LO or HI{:/} | 
| {::nomarkdown}ARRAY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}The array of numbers.  Pass using . syntaxX(12)=\\,X(23)=\\,... for example{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}