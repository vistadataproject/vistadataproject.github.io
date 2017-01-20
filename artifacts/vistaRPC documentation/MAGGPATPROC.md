---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGPATPROC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGGPATPROC{:/}
 tag | {::nomarkdown}PRC{:/}
 routine | [MAGGTMC](http://code.osehra.org/dox/Routine_MAGGTMC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return a List of All Patient Procedures in subspeciality.For use when capturing Images and linking to a Medicine Procedure.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGGZY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input is '^' delimited string of info.Medicine SubSpecialty ^ Patient  ^ To Date ^ From DateIEN(^MCAR(697.2)  ^ DFN ^ TO DATE ^(FROM DATE def to TODAY) i.e.     \43^643^07/03/95\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}