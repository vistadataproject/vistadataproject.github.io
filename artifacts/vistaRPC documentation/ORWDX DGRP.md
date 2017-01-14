---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDX DGRP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX DGRP{:/}
 tag | {::nomarkdown}DGRP{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the display group pointer for an order dialog.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DGRP^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Display grp pointer for a dlg
 Input parameters | {::nomarkdown}DLG{:/}
 Code | ```  S DLG=$S($E(DLG)="`":+$P(DLG,"`",2),1:$O(^ORD(101.41,"AB",DLG,0))) ;kcm
 S VAL=$P($G(^ORD(101.41,DLG,0)),U,5)```




 Generated on January 14th 2017, 7:26:35 am