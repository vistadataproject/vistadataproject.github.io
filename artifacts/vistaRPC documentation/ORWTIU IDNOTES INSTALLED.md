---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU IDNOTES INSTALLED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU IDNOTES INSTALLED{:/}
 tag | {::nomarkdown}IDNOTES{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns \1\ if TIU*1.0*100 is installed, \0\ otherwise.  This lets theCPRS GUI enable or disable the Interdisciplinary Notes functionality untilthe server is ready.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | IDNOTES^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | Is ID Notes installed?
 Code | {::nomarkdown}  S ORY=$$PATCH^XPDUTL("TIU*1.0*100"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}