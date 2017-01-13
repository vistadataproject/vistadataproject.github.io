---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL VERIFY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL VERIFY{:/}
 tag | {::nomarkdown}VERIFY{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}VERIFY A TRANSCRIBED PROBLEM{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | verify a transcribed problem

 Leading comment lines | {::nomarkdown}RETURN:  ;(consistent with UPDATE function)
SUCCESS:
RETURN>0, RETURN(0)=""
FAILURE:
RETURN<0, RETURN(0)=verbose error message{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPIFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}PROBLEM IFN{:/} | 




 Generated on January 13th 2017, 6:15:57 am