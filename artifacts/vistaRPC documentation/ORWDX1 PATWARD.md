---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX1 PATWARD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX1 PATWARD{:/}
 tag | {::nomarkdown}PATWARD{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 N TEMP
 S ORY=""
 I $G(^DPT(DFN,.1))="" Q
 S TEMP=^DPT(DFN,.1)
 S ORY=TEMP_U_+$G(^DIC(42,+$O(^DIC(42,"B",TEMP,0)),44))```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 




 Generated on January 13th 2017, 6:55:29 am