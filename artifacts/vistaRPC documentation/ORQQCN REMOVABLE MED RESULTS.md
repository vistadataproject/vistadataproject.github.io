---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN REMOVABLE MED RESULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN REMOVABLE MED RESULTS{:/}
 tag | {::nomarkdown}GETRES{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of medicine results that are currently attached to aprocedure.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return array of associated med results
 Input Parameters | {::nomarkdown}GMRCO{:/}
 Lines | ```{::nomarkdown} Q:+$G(GMRCO)=0<br/> D GETRES^GMRCGUIU(GMRCO,.ORY)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult (procedure) IEN in file 123.{:/} | 




 Generated on January 13th 2017, 7:11:27 am