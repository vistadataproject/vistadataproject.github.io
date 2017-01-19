---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU GBLREF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU GBLREF{:/}
 tag | {::nomarkdown}GBLREF{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the global reference for a particular file number.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GBLREF^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | return global reference for file number
 Input parameters | {::nomarkdown}FN{:/}
 Code | {::nomarkdown}  S VAL="" Q:'FN<br> S VAL=$$ROOT^DILFD(+FN){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}