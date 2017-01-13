---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS PUT UNION 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS PUT UNION{:/}
 tag | {::nomarkdown}UNIEDT{:/}
 routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call will either file a new Union record if there is no internal recordnumber passed back or it will edit an existing union record if the internal record number is present and passed back.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the IEN, the Union Name, Union Acronym, and the Unionrepresentative in the format:   IEN^UNION NAME^UNION ACRONYM^UNION REPThe data in the Union Representative field is in external format.{:/} | 




 Generated on January 13th 2017, 6:44:47 am