---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALQTY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALQTY{:/}
 tag | {::nomarkdown}VALQTY{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validate a medication quantity and return a 1 if it is valid, otherwisereturn 0.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VALQTY^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | validate a quantity, return 1 if valid, 0 if not
 Input parameters | {::nomarkdown}X{:/}
 First comment | {::nomarkdown}<pre> to be compatible with LM, make sure X is integer from 1 to 240<br/> this is based on the input transform from 52,7</pre>{:/}
 Code | {::nomarkdown}  K:(+X'>0)!(+X>99999999)!(X'?.8N.1".".2N)!($L(X)>12) X<br> S OK=$S($D(X):1,1:0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}