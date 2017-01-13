---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU REMINDER DIALOGS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU REMINDER DIALOGS{:/}
 tag | {::nomarkdown}REMDLGS{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of reminder dialogs allowed for use as Templates.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns a list of all reminder dialogs usable in templates
 Lines | ```
 N SRV
 K TIUY
 D RDACCUM(.TIUY,"USR","N")
 S SRV=$$GETSRV(DUZ)
 D RDACCUM(.TIUY,"SRV.`"_+$G(SRV),"N")
 D RDACCUM(.TIUY,"DIV","N")
 D RDACCUM(.TIUY,"SYS","N")```




 Generated on January 13th 2017, 6:55:29 am