---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV WARD_ROOM PATIENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV WARD_ROOM PATIENTS{:/}
 tag | {::nomarkdown}ROOMPT{:/}
 routine | [GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patients in the ward and rooms specified.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVWRD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the ward (e.g., 2EAST).{:/} | 
| {::nomarkdown}GMVRLST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}150{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The room numbers of the ward separated by comma (e.g., 200,210,220).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}