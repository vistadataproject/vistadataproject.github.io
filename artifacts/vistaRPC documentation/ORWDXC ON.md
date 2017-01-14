---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXC ON 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC ON{:/}
 tag | {::nomarkdown}ON{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns E if order checking enabled, otherwise D.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ON^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | returns E if order checking enabled, otherwise D
 Code | ```  S VAL=$$GET^XPAR("DIV^SYS^PKG","ORK SYSTEM ENABLE/DISABLE")```




 Generated on January 14th 2017, 7:26:35 am