---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN CANEDIT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN CANEDIT{:/}
 tag | {::nomarkdown}CANEDIT{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns indication of whether a consult/procedure request can beresubmitted.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to record  in file 123.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CANEDIT^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | Return whether consult can be edited and resubmitted
 Input parameters | {::nomarkdown}GMRCO{:/}
 Code | ```  S Y=$$EDRESOK^GMRCEDT2(GMRCO)```




 Generated on January 14th 2017, 7:26:35 am