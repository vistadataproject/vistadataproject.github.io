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

 Property | Value 
 --- | --- 
 Method | PROVKEY^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | Returns 1 if user possesses the provider key
 Input parameters | {::nomarkdown}USERID{:/}
 Code | {::nomarkdown}  N NAM S NAM=$P(^VA(200,USERID,0),U,1)<br> S VAL=$D(^VA(200,"AK.PROVIDER",NAM,USERID)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}