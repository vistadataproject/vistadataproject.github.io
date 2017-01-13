---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMRC LIST CONSULT REQUESTS 

 property | value 
--- | --- 
 label | {::nomarkdown}GMRC LIST CONSULT REQUESTS{:/}
 tag | {::nomarkdown}RPCLIST{:/}
 routine | [GMRCTIU](http://code.osehra.org/dox/Routine_GMRCTIU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return a list of active and pending consult requests toassociate a result with.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get consult list and return in GMRCY for GUI
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```{::nomarkdown} N GMRCI<br/> I '+$G(DFN) S GMRCY(0)=0<br/> D GETCONSL(DFN,1) ;1=returns GUI format in GMRCY array<br/> S GMRCY(0)=+$G(GMRCI)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Record Number of patient in file 2.{:/} | 




 Generated on January 13th 2017, 7:11:26 am