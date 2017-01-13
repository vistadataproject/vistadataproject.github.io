---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN MED RESULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN MED RESULTS{:/}
 tag | {::nomarkdown}MEDRSLT{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a display of Medicine Package results, followed by any TIUresults.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns Medicine results plus TIU results
 Input Parameters | {::nomarkdown}GMRCO{:/}
 Lines | ```
 S ORY=$NA(^TMP("ORRSLT",$J))
 D RT^GMRCGUIA(GMRCO,ORY)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the consults request in file 123,REQUESTS/CONSULTS.{:/} | 




 Generated on January 13th 2017, 6:55:29 am