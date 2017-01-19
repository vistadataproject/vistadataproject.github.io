---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU HASKEY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU HASKEY{:/}
 tag | {::nomarkdown}HASKEY{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if a user holds a security key, otherwise 0.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | HASKEY^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | returns TRUE if the user possesses the security key
 Input parameters | {::nomarkdown}KEY{:/}
 Code | {::nomarkdown}  S VAL=''$D(^XUSEC(KEY,DUZ)){:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}