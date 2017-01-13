---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT APPTLST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT APPTLST{:/}
 tag | {::nomarkdown}APPTLST{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of appointments for a patient (for visit selection).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return a list of appointments
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 N ERR,ERRMSG,VASD,VAERR K ^UTILITY("VASD",$J)  ;IA 10061
 S VASD("F")=$$HTFM^XLFDT($H-30,1)
 S VASD("T")=$$HTFM^XLFDT($H+1,1)_".2359"
 S VASD("W")="123456789"
 D SDA^ORQRY01(.ERR,.ERRMSG)
 I ERR K ^UTILITY("VASD",$J) K LST S LST(1)=ERRMSG Q
 S I=0 F  S I=$O(^UTILITY("VASD",$J,I)) Q:'I  D
 . S LST(I)=$P(^UTILITY("VASD",$J,I,"I"),U,1,2)_U_$P(^("E"),U,2,3)
 K ^UTILITY("VASD",$J)```
 Leading comment lines | {::nomarkdown}APPTTIME^LOCIEN^LOCNAME^EXTSTATUS{:/}




 Generated on January 13th 2017, 6:55:28 am