---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS COVER 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS COVER{:/}
 tag | {::nomarkdown}COVER{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of medications to display on the CPRS GUI cover sheet for apatient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | retrieve meds for cover sheet
 Input Parameters | {::nomarkdown}DFN<br/>FILTER{:/}
 Lines | {::nomarkdown} S FILTER=$G(FILTER,0)<br/> K ^TMP("PS",$J)<br/> D OCL^PSOORRL(DFN,"","")<br/> N ILST,ITMP,X,VAIN,VAERR S ILST=0<br/> D:FILTER INP^VADPT<br/> S ITMP="" F  S ITMP=$O(^TMP("PS",$J,ITMP)) Q:'ITMP  D<br/> . I FILTER,$G(VAIN(1))>0,$P(^TMP("PS",$J,ITMP,0),U)["N;O" Q<br/> . S X=^TMP("PS",$J,ITMP,0)<br/> . I '$L($P(X,U,2)) S X="??"  ; show something if drug empty<br/> . I $D(^TMP("PS",$J,ITMP,"CLINIC",0)) S LST($$NXT)=$P(X,U,1,2)_U_$P(X,U,8,9)_U_"C"<br/> . E  S LST($$NXT)=$P(X,U,1,2)_U_$P(X,U,8,9)<br/> K ^TMP("PS",$J){:/}




 Generated on January 13th 2017, 7:15:27 am