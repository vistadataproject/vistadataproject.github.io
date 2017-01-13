---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALQTY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALQTY{:/}
 tag | {::nomarkdown}VALQTY{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validate a medication quantity and return a 1 if it is valid, otherwisereturn 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | validate a quantity, return 1 if valid, 0 if not
 Input Parameters | {::nomarkdown}X{:/}
 Lines | ```{::nomarkdown} K:(+X'>0)!(+X>99999999)!(X'?.8N.1".".2N)!($L(X)>12) X<br/> S OK=$S($D(X):1,1:0)```{:/}
 Leading comment lines | {::nomarkdown}to be compatible with LM, make sure X is integer from 1 to 240<br/>this is based on the input transform from 52,7{:/}




 Generated on January 13th 2017, 7:11:26 am