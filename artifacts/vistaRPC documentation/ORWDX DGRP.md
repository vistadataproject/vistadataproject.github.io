---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX DGRP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX DGRP{:/}
 tag | {::nomarkdown}DGRP{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the display group pointer for an order dialog.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DGRP^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Display grp pointer for a dlg
 Input parameters | {::nomarkdown}DLG{:/}
 Code | {::nomarkdown}  S DLG=$S($E(DLG)="`":+$P(DLG,"`",2),1:$O(^ORD(101.41,"AB",DLG,0))) ;kcm<br> S VAL=$P($G(^ORD(101.41,DLG,0)),U,5){:/}


### CPRS

[Orders/rODBase.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}