---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXQ GETQLST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ GETQLST{:/}
 tag | {::nomarkdown}GETQLST{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return quick list for a display group.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETQLST^[ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 Method comment | Return quick list for a display group
 Input parameters | {::nomarkdown}DGRP<br/>PRE{:/}
 Code | ```  N LVW,ILST,I,X0
 S PRE=$G(PRE),ILST=0
 D QV4DG^ORWUL(.LVW,DGRP) S LVW=+LVW Q:'LVW
 S I=0 F  S I=$O(^ORD(101.44,LVW,10,I)) Q:'I  D
 . S X0=$G(^ORD(101.44,LVW,10,I,0))
 . I $P($G(^ORD(101.41,+X0,0)),U,3)]"" Q  ; quick order is disabled
 . S ILST=ILST+1,LST(ILST)=PRE_X0```




 Generated on January 14th 2017, 7:26:35 am