---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN DEFAULT REQUEST REASON 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN DEFAULT REQUEST REASON{:/}
 tag | {::nomarkdown}DEFRFREQ{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return default reason for request for service
 Leading comment lines | {::nomarkdown}ORSVC=pointer to file 123.5<br/>ORDFN=patient, if RESOLVE=1<br/>RESOLVE=1 to resolve boilerplate, 0 to not resolve{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  |  | 
| {::nomarkdown}PATIENT DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} |  |  | 
| {::nomarkdown}RESOLVE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} |  |  | 




 Generated on January 13th 2017, 6:44:47 am