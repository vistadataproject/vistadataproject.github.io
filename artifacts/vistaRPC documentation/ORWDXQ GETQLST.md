---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXQ GETQLST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ GETQLST{:/}
 tag | {::nomarkdown}GETQLST{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return quick list for a display group.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETQLST^[ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 Method comment | Return quick list for a display group
 Input parameters | {::nomarkdown}DGRP<br>PRE{:/}
 Code | {::nomarkdown}  N LVW,ILST,I,X0<br> S PRE=$G(PRE),ILST=0<br> D QV4DG^ORWUL(.LVW,DGRP) S LVW=+LVW Q:'LVW<br> S I=0 F  S I=$O(^ORD(101.44,LVW,10,I)) Q:'I  D<br> . S X0=$G(^ORD(101.44,LVW,10,I,0))<br> . I $P($G(^ORD(101.41,+X0,0)),U,3)]"" Q  ; quick order is disabled<br> . S ILST=ILST+1,LST(ILST)=PRE_X0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Consults/rConsults.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas)
 [Orders/rODBase.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas)
 [Orders/rODDiet.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}