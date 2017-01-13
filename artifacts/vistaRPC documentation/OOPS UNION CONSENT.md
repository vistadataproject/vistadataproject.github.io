---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS UNION CONSENT 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS UNION CONSENT{:/}
 tag | {::nomarkdown}CONSENT{:/}
 routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call will send the Bulletin to the union representative selected.Note: a ASISTS legacy routine is called from this broker call to send thebulletin.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This required input field must be a valid IEN in the 2260 file. Note, there isno validation check done on the IEN.{:/} | 
| {::nomarkdown}UNIREP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This required input parameter must be a valid DUZ of the Union Representativeselected to receive the Bulletin. Note, like the IEN input parm, no validation is done on the DUZ being passed. {:/} | 




 Generated on January 13th 2017, 6:15:57 am