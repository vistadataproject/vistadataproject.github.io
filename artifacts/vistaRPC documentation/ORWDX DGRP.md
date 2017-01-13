---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX DGRP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX DGRP{:/}
 tag | {::nomarkdown}DGRP{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the display group pointer for an order dialog.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Display grp pointer for a dlg
 Input Parameters | {::nomarkdown}DLG{:/}
 Lines | {::nomarkdown} S DLG=$S($E(DLG)="`":+$P(DLG,"`",2),1:$O(^ORD(101.41,"AB",DLG,0))) ;kcm<br/> S VAL=$P($G(^ORD(101.41,DLG,0)),U,5){:/}




 Generated on January 13th 2017, 7:15:27 am