---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPS COVER 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS COVER{:/}
 tag | {::nomarkdown}COVER{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of medications to display on the CPRS GUI cover sheet for apatient.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | COVER^[ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 Method comment | retrieve meds for cover sheet
 Input parameters | {::nomarkdown}DFN<br/>FILTER{:/}
 Code | ```  S FILTER=$G(FILTER,0)
 K ^TMP("PS",$J)
 D OCL^PSOORRL(DFN,"","")
 N ILST,ITMP,X,VAIN,VAERR S ILST=0
 D:FILTER INP^VADPT
 S ITMP="" F  S ITMP=$O(^TMP("PS",$J,ITMP)) Q:'ITMP  D
 . I FILTER,$G(VAIN(1))>0,$P(^TMP("PS",$J,ITMP,0),U)["N;O" Q
 . S X=^TMP("PS",$J,ITMP,0)
 . I '$L($P(X,U,2)) S X="??"  ; show something if drug empty
 . I $D(^TMP("PS",$J,ITMP,"CLINIC",0)) S LST($$NXT)=$P(X,U,1,2)_U_$P(X,U,8,9)_U_"C"
 . E  S LST($$NXT)=$P(X,U,1,2)_U_$P(X,U,8,9)
 K ^TMP("PS",$J)```




 Generated on January 14th 2017, 7:26:35 am