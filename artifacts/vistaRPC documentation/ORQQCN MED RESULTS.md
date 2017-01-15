---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN MED RESULTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN MED RESULTS{:/}
 tag | {::nomarkdown}MEDRSLT{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a display of Medicine Package results, followed by any TIUresults.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the consults request in file 123,REQUESTS/CONSULTS.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | MEDRSLT^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Returns Medicine results plus TIU results
 Input parameters | {::nomarkdown}GMRCO{:/}
 Code | {::nomarkdown}  S ORY=$NA(^TMP("ORRSLT",$J))<br> D RT^GMRCGUIA(GMRCO,ORY){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}