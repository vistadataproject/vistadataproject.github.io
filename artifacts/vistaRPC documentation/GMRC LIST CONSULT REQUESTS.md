---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; GMRC LIST CONSULT REQUESTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}GMRC LIST CONSULT REQUESTS{:/}
 tag | {::nomarkdown}RPCLIST{:/}
 routine | [GMRCTIU](http://code.osehra.org/dox/Routine_GMRCTIU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return a list of active and pending consult requests toassociate a result with.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Record Number of patient in file 2.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RPCLIST^[GMRCTIU](http://code.osehra.org/dox/Routine_GMRCTIU_source.html)
 Method comment | Get consult list and return in GMRCY for GUI
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  N GMRCI
 I '+$G(DFN) S GMRCY(0)=0
 D GETCONSL(DFN,1) ;1=returns GUI format in GMRCY array
 S GMRCY(0)=+$G(GMRCI)```




 Generated on January 14th 2017, 7:26:35 am