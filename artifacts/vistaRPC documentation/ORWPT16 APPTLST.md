---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 APPTLST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 APPTLST{:/}
 tag | {::nomarkdown}APPTLST{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```{::nomarkdown} N I,ILST S ILST=0<br/> D GETAPPT^TIUVSIT(DFN)<br/> S I=0 F  S I=$O(^TMP("TIUVNI",$J,I)) Q:'I  D<br/> . S ILST=ILST+1<br/> . S LST(ILST)=$P(^TMP("TIUVNI",$J,I),U,1,2)_U_$P(^TMP("TIUVN",$J,I),U,1,2)<br/> K ^TMP("TIUVN",$J),^TMP("TIUVNI",$J)```{:/}
 Leading comment lines | {::nomarkdown}Return a list of appointments{:/}




 Generated on January 13th 2017, 7:11:26 am