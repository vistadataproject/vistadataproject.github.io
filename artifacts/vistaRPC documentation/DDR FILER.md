---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DDR FILER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DDR FILER{:/}
 tag | {::nomarkdown}FILEC{:/}
 routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Generic call to file edits into FM file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}EDIT RESULTS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Results of editing to be placed in FDA array by broker.{:/} | 
| {::nomarkdown}EDIT MODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Is processing in edit or add data mode.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}