---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC ON 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC ON{:/}
 tag | {::nomarkdown}ON{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns E if order checking enabled, otherwise D.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | returns E if order checking enabled, otherwise D
 Lines | ```{::nomarkdown} S VAL=$$GET^XPAR("DIV^SYS^PKG","ORK SYSTEM ENABLE/DISABLE")```{:/}




 Generated on January 13th 2017, 7:11:27 am