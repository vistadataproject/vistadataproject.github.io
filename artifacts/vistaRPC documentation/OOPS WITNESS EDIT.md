---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS WITNESS EDIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS WITNESS EDIT{:/}
 tag | {::nomarkdown}EDTWITN{:/}
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call files any changes entered on an existing Witness.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter contains the IEN and Witness Number for the Witnessbeing entered.  It is in the format: IEN^WIT.{:/} | 
| {::nomarkdown}INFO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} |  | {::nomarkdown}This input parameter contains the address information for the witness. It isin the format: NAME^STREET^CITY^STATE^ZIP^DATE SIGNED.{:/} | 
| {::nomarkdown}CMNT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} |  | {::nomarkdown}This input parameter contains the text for the Witness Comment.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}