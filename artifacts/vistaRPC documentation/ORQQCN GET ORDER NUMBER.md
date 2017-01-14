---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN GET ORDER NUMBER 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET ORDER NUMBER{:/}
 tag | {::nomarkdown}GETORDER{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETORDER^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Return OERR order number for consult/procedure
 Input parameters | {::nomarkdown}GMRCO{:/}
 Code | ```  I +$G(GMRCO)=0 S Y="-1" Q
 S Y=$$ORIFN^GMRCUTL1(GMRCO)```




 Generated on January 14th 2017, 7:26:35 am