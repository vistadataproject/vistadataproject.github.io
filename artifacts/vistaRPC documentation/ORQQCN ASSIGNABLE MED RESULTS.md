---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ASSIGNABLE MED RESULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ASSIGNABLE MED RESULTS{:/}
 tag | {::nomarkdown}GETMED{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of medicine results that can be attached to a procedure.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return available med results for proc request
 Input Parameters | {::nomarkdown}GMRCO{:/}
 Lines | {::nomarkdown} Q:+$G(GMRCO)=0<br/> D GETMED^GMRCGUIU(GMRCO,.ORY){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult (procedure) IEN in file 123.{:/} | 




 Generated on January 13th 2017, 7:15:27 am