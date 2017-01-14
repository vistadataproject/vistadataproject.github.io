---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS WITNESS CREATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS WITNESS CREATE{:/}
 tag | {::nomarkdown}ADDWITN{:/}
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call will add a new Witness record for a case in the ASISTS Accident Reporting File (#2260).  It is called by the CA1 form in Delphi. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN for the case in file 2260 that is having the witness info created.{:/} | 
| {::nomarkdown}INFO{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Name, Street, City, State, Zip, and Date of Witness Signature. Itmust be in format... NAME^STREET^CITY^STATE^ZIP^DATESIGNED{:/} | 
| {::nomarkdown}CMNT{:/} |  |  |  |  | 
| {::nomarkdown}COMMENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The input will be a string containing the comment to be added/associated withthe witness record created. {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}