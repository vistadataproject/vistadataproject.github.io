---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS PUT UNION 

 property | value 
--- | --- 
 label | OOPS PUT UNION
 tag | UNIEDT
 routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
 return value type | SINGLE VALUE
 description | This call will either file a new Union record if there is no internal recordnumber passed back or it will edit an existing union record if the internal record number is present and passed back.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 256 | true | This parameter contains the IEN, the Union Name, Union Acronym, and the Unionrepresentative in the format:   IEN^UNION NAME^UNION ACRONYM^UNION REPThe data in the Union Representative field is in external format. | 