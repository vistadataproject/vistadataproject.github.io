---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS SET FIELD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS SET FIELD{:/}
 tag | {::nomarkdown}SETFIELD{:/}
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call will set a single field in file 2260. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Contains the IEN of the record and the field number to be modified in file 2260.The format for the IEN and field number is IEN^FIELDNUM.{:/} | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The VALUE parm should be the external value that you want to set for the fieldspecified in the INPUT parm.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}