---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 APPTLST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 APPTLST{:/}
 tag | {::nomarkdown}APPTLST{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | APPTLST^[ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}<pre> Return a list of appointments</pre>{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N I,ILST S ILST=0<br> D GETAPPT^TIUVSIT(DFN)<br> S I=0 F  S I=$O(^TMP("TIUVNI",$J,I)) Q:'I  D<br> . S ILST=ILST+1<br> . S LST(ILST)=$P(^TMP("TIUVNI",$J,I),U,1,2)_U_$P(^TMP("TIUVN",$J,I),U,1,2)<br> K ^TMP("TIUVN",$J),^TMP("TIUVNI",$J){:/}


### CPRS

[NOT OSEHRA CPRS]()

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}