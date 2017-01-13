---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD KEY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD KEY{:/}
 tag | {::nomarkdown}KEY{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC which receives a key name and returns a 1 if the user holds the key,otherwise a 0 is returned.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns 1 if user possesses the key
 Input Parameters | {::nomarkdown}KEYNAME<br/>USERID{:/}
 Lines | ```
 S VAL=0 I $D(^XUSEC(KEYNAME,USERID)) S VAL=1```




 Generated on January 13th 2017, 6:55:28 am