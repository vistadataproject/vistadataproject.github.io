---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX AGAIN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX AGAIN{:/}
 tag | {::nomarkdown}AGAIN{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a 1 if the dialog should be kept for another order, otherwise 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return true to keep dlg for another order
 Input Parameters | {::nomarkdown}DLG{:/}
 Lines | ```
 S VAL=''$P($G(^ORD(101.41,DLG,0)),U,9)```




 Generated on January 13th 2017, 6:55:29 am