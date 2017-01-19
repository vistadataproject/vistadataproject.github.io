---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT APPTLST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT APPTLST{:/}
 tag | {::nomarkdown}APPTLST{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of appointments for a patient (for visit selection).{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | APPTLST^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | return a list of appointments
 First comment | {::nomarkdown}<pre> APPTTIME^LOCIEN^LOCNAME^EXTSTATUS</pre>{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N ERR,ERRMSG,VASD,VAERR K ^UTILITY("VASD",$J)  ;IA 10061<br> S VASD("F")=$$HTFM^XLFDT($H-30,1)<br> S VASD("T")=$$HTFM^XLFDT($H+1,1)_".2359"<br> S VASD("W")="123456789"<br> D SDA^ORQRY01(.ERR,.ERRMSG)<br> I ERR K ^UTILITY("VASD",$J) K LST S LST(1)=ERRMSG Q<br> S I=0 F  S I=$O(^UTILITY("VASD",$J,I)) Q:'I  D<br> . S LST(I)=$P(^UTILITY("VASD",$J,I,"I"),U,1,2)_U_$P(^("E"),U,2,3)<br> K ^UTILITY("VASD",$J){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}