---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD KEY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD KEY{:/}
 tag | {::nomarkdown}KEY{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC which receives a key name and returns a 1 if the user holds the key,otherwise a 0 is returned.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | KEY^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | Returns 1 if user possesses the key
 Input parameters | {::nomarkdown}KEYNAME<br>USERID{:/}
 Code | {::nomarkdown}  S VAL=0 I $D(^XUSEC(KEYNAME,USERID)) S VAL=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}