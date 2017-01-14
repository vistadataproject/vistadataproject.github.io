---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDX1 PATWARD 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX1 PATWARD{:/}
 tag | {::nomarkdown}PATWARD{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PATWARD^[ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  N TEMP
 S ORY=""
 I $G(^DPT(DFN,.1))="" Q
 S TEMP=^DPT(DFN,.1)
 S ORY=TEMP_U_+$G(^DIC(42,+$O(^DIC(42,"B",TEMP,0)),44))```




 Generated on January 14th 2017, 7:26:36 am