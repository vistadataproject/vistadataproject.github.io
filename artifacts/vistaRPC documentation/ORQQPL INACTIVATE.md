---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL INACTIVATE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL INACTIVATE{:/}
 tag | {::nomarkdown}INACT{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
--- | --- 
 Method comment | inactivate a problem
 Leading comment lines | RETURN:  ;(consistent with UPDATE function)
SUCCESS:
RETURN>0, RETURN(0)=""
FAILURE:
RETURN<0, RETURN(0)=verbose error message

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Problem IFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 5:52:13 am