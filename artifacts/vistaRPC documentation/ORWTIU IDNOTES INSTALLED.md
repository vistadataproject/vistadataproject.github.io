---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU IDNOTES INSTALLED 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU IDNOTES INSTALLED{:/}
 tag | {::nomarkdown}IDNOTES{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns \1\ if TIU*1.0*100 is installed, \0\ otherwise.  This lets theCPRS GUI enable or disable the Interdisciplinary Notes functionality untilthe server is ready.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Is ID Notes installed?
 Lines | {::nomarkdown} S ORY=$$PATCH^XPDUTL("TIU*1.0*100"){:/}




 Generated on January 13th 2017, 7:15:28 am