---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDX DISMSG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX DISMSG{:/}
 tag | {::nomarkdown}DISMSG{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns disabled message for an ordering dialog.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DISMSG^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Disabled mge for ordering dlg
 Input parameters | {::nomarkdown}IEN{:/}
 Code | ```  S VAL=$P($G(^ORD(101.41,+IEN,0)),U,3)```




 Generated on January 14th 2017, 7:26:35 am