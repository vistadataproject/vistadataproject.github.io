---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL VERIFY 

 property | value 
--- | --- 
 label | ORQQPL VERIFY
 tag | VERIFY
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | SINGLE VALUE
 description | VERIFY A TRANSCRIBED PROBLEM


### Method description

 property | value 
--- | --- 
 Method comment | verify a transcribed problem
 Leading comment lines | RETURN:  ;(consistent with UPDATE function),SUCCESS:,RETURN>0, RETURN(0)="",FAILURE:,RETURN<0, RETURN(0)=verbose error message

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMPIFN | LITERAL |  |  | PROBLEM IFN | 




 ###### Generated on January 11th 2017, 6:39:42 am