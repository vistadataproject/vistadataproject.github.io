---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT16 APPTLST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 APPTLST{:/}
 tag | {::nomarkdown}APPTLST{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | APPTLST^[ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}Return a list of appointments{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  N I,ILST S ILST=0
 D GETAPPT^TIUVSIT(DFN)
 S I=0 F  S I=$O(^TMP("TIUVNI",$J,I)) Q:'I  D
 . S ILST=ILST+1
 . S LST(ILST)=$P(^TMP("TIUVNI",$J,I),U,1,2)_U_$P(^TMP("TIUVN",$J,I),U,1,2)
 K ^TMP("TIUVN",$J),^TMP("TIUVNI",$J)```




 Generated on January 14th 2017, 7:26:35 am