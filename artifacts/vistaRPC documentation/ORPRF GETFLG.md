---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORPRF GETFLG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORPRF GETFLG{:/}
 tag | {::nomarkdown}GETFLG{:/}
 routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETFLG^[ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 Method comment | Return detailed flag info for flag FLAGID
 Input parameters | {::nomarkdown}PTDFN<br/>FLAGID{:/}
 Code | ```  I '$D(^TMP("ORPRF",$J,FLAGID)) Q
 N IX,CNT
 S (IX,CNT)=0
 F  S IX=$O(^TMP("ORPRF",$J,FLAGID,IX)) Q:'IX  D
 . S CNT=CNT+1,ORY(CNT)=$G(^TMP("ORPRF",$J,FLAGID,IX))```




 Generated on January 14th 2017, 7:26:35 am