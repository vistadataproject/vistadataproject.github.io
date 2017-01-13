---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORPRF GETFLG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORPRF GETFLG{:/}
 tag | {::nomarkdown}GETFLG{:/}
 routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return detailed flag info for flag FLAGID
 Input Parameters | {::nomarkdown}PTDFN<br/>FLAGID{:/}
 Lines | ```
 I '$D(^TMP("ORPRF",$J,FLAGID)) Q
 N IX,CNT
 S (IX,CNT)=0
 F  S IX=$O(^TMP("ORPRF",$J,FLAGID,IX)) Q:'IX  D
 . S CNT=CNT+1,ORY(CNT)=$G(^TMP("ORPRF",$J,FLAGID,IX))```




 Generated on January 13th 2017, 6:55:29 am