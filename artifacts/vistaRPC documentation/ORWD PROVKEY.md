---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD PROVKEY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD PROVKEY{:/}
 tag | {::nomarkdown}PROVKEY{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if the users possesses the PROVIDER key.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PROVKEY^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | Returns 1 if user possesses the provider key
 Input parameters | {::nomarkdown}USERID{:/}
 Code | {::nomarkdown}  N NAM S NAM=$P(^VA(200,USERID,0),U,1)<br> S VAL=$D(^VA(200,"AK.PROVIDER",NAM,USERID)){:/}


### CPRS

[NOT OSEHRA CPRS]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}