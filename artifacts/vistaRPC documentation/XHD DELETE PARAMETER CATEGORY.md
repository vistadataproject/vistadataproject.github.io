---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XHD DELETE PARAMETER CATEGORY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XHD DELETE PARAMETER CATEGORY{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [XHDPCAT](http://code.osehra.org/dox/Routine_XHDPCAT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call deletes parameter categories from the M backing store. If the second parameter, DELKIDS is passed as \1\ (boolean true by M programming convention), all descendents of the category in question will also be deleted.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PCAT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (i.e., IEN) of the parameter category to be deleted.{:/} | 
| {::nomarkdown}DELKIDS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This boolean flag indicates whether to delete all descendents of the parameter category in question.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}