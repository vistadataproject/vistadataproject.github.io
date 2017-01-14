---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP2 HS SUBITEMS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS SUBITEMS{:/}
 tag | {::nomarkdown}SUBITEM{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC expands a Laboratory Test panel to all it's sub-components forselection in the ADHOC Health Summary.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TEST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the pointer value to the Laboratory Test (#60) file of the panelto be expanded.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SUBITEM^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get Subitems for a Test Panel
 First comment | {::nomarkdown}RPC => ORWRP2 HS SUBITEMS{:/}
 Input parameters | {::nomarkdown}ORTEST{:/}
 Code | ```  D SUBITEM^GMTSADH5(.ORY,ORTEST)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}