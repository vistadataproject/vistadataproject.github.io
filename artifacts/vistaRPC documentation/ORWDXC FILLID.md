---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC FILLID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC FILLID{:/}
 tag | {::nomarkdown}FILLID{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return the FillerID (namespace) for a dialog.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | FILLID^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Return the FillerID (namespace) for a dialog
 Input parameters | {::nomarkdown}DLG{:/}
 Code | {::nomarkdown}  N DGRP<br> S VAL="",DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP<br> S DLG=$$DEFDLG^ORWDXQ(DGRP)<br> S VAL=$P($G(^ORD(101.41,DLG,0)),U,7),VAL=$$NMSP^ORCD(VAL)<br> I VAL="PS" D<br> . N X<br> . S X=$P($P($G(^ORD(100.98,DGRP,0)),U,3)," ")<br> . I $L(X) S VAL="PS"_$S(X="UD":"I",1:X){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}