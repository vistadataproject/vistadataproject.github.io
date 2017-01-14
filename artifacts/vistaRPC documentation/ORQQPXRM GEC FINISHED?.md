---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPXRM GEC FINISHED? 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM GEC FINISHED?{:/}
 tag | {::nomarkdown}GECF{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC pass a boolean value to PXRMGECU{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Patient DFN{:/} | 
| {::nomarkdown}FIN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Fin is a 1 or 0{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GECF^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}DFN<br/>FIN{:/}
 Code | ```  D FINISHED^PXRMGECU(DFN,FIN)```




 Generated on January 14th 2017, 7:26:36 am