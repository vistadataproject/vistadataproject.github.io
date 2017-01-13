---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU NPHASKEY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU NPHASKEY{:/}
 tag | {::nomarkdown}NPHASKEY{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a 1 if a specified user holds a specified key, otherwise returns0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | returns TRUE if the person has the security key
 Input Parameters | {::nomarkdown}NP<br/>KEY{:/}
 Lines | ```{::nomarkdown} S VAL=''$D(^XUSEC(KEY,NP))```{:/}




 Generated on January 13th 2017, 7:11:26 am