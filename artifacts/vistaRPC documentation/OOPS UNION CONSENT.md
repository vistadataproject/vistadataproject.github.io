---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS UNION CONSENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS UNION CONSENT{:/}
 tag | {::nomarkdown}CONSENT{:/}
 routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call will send the Bulletin to the union representative selected.Note: a ASISTS legacy routine is called from this broker call to send thebulletin.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This required input field must be a valid IEN in the 2260 file. Note, there isno validation check done on the IEN.{:/} | 
| {::nomarkdown}UNIREP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This required input parameter must be a valid DUZ of the Union Representativeselected to receive the Bulletin. Note, like the IEN input parm, no validation is done on the DUZ being passed. {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}