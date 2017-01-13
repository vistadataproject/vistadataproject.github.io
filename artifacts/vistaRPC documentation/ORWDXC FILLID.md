---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC FILLID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC FILLID{:/}
 tag | {::nomarkdown}FILLID{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return the FillerID (namespace) for a dialog.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return the FillerID (namespace) for a dialog
 Input Parameters | {::nomarkdown}DLG{:/}
 Lines | ```
 N DGRP
 S VAL="",DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP
 S DLG=$$DEFDLG^ORWDXQ(DGRP)
 S VAL=$P($G(^ORD(101.41,DLG,0)),U,7),VAL=$$NMSP^ORCD(VAL)
 I VAL="PS" D
 . N X
 . S X=$P($P($G(^ORD(100.98,DGRP,0)),U,3)," ")
 . I $L(X) S VAL="PS"_$S(X="UD":"I",1:X)```




 Generated on January 13th 2017, 6:55:29 am