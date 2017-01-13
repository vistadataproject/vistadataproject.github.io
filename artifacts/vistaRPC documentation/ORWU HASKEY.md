---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU HASKEY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU HASKEY{:/}
 tag | {::nomarkdown}HASKEY{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if a user holds a security key, otherwise 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | returns TRUE if the user possesses the security key
 Input Parameters | {::nomarkdown}KEY{:/}
 Lines | ```{::nomarkdown} S VAL=''$D(^XUSEC(KEY,DUZ))```{:/}




 Generated on January 13th 2017, 7:11:26 am