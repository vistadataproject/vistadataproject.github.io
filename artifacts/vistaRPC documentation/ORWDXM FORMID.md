---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM FORMID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM FORMID{:/}
 tag | {::nomarkdown}FORMID{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return the FormID for a dialog entry.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return the FormID for a dialog
 Input Parameters | {::nomarkdown}DLG{:/}
 Lines | ```
 S VAL=+$P($G(^ORD(101.41,DLG,5)),U,5) Q:VAL
 I $P($G(^ORD(101.41,DLG,0)),U,4)="Q" D
 . N DGRP S DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP
 . S DLG=$$DEFDLG^ORWDXQ(DGRP) Q:'DLG
 . S VAL=+$P($G(^ORD(101.41,DLG,5)),U,5)
 I 'VAL,$P($G(^ORD(101.41,DLG,0)),U,7)=$O(^DIC(9.4,"C","OR",0)) D
 . S VAL=152  ; use generic "on the fly" form```




 Generated on January 13th 2017, 6:55:29 am