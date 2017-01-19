---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB STATALOW 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB STATALOW{:/}
 tag | {::nomarkdown}STATALOW{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check to see if user is allowed to order STAT orders through VBECS.Checks users with parameter: OR VBECS STAT USER{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | STATALOW^[ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 Method comment | Allow stat for ORES ORELSE users
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  S OROOT=$D(^XUSEC("ORES",DUZ))!($D(^XUSEC("ORELSE",DUZ))){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}