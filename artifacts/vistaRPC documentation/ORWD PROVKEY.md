---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD PROVKEY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD PROVKEY{:/}
 tag | {::nomarkdown}PROVKEY{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if the users possesses the PROVIDER key.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns 1 if user possesses the provider key
 Input Parameters | {::nomarkdown}USERID{:/}
 Lines | ```
 N NAM S NAM=$P(^VA(200,USERID,0),U,1)
 S VAL=$D(^VA(200,"AK.PROVIDER",NAM,USERID))```




 Generated on January 13th 2017, 6:55:28 am