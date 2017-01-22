---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS COVER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS COVER{:/}
 tag | {::nomarkdown}COVER{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of medications to display on the CPRS GUI cover sheet for apatient.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | COVER^[ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 Method comment | retrieve meds for cover sheet
 Input parameters | {::nomarkdown}DFN, FILTER{:/}
 Code | {::nomarkdown}  S FILTER=$G(FILTER,0)<br> K ^TMP("PS",$J)<br> D OCL^PSOORRL(DFN,"","")<br> N ILST,ITMP,X,VAIN,VAERR S ILST=0<br> D:FILTER INP^VADPT<br> S ITMP="" F  S ITMP=$O(^TMP("PS",$J,ITMP)) Q:'ITMP  D<br> . I FILTER,$G(VAIN(1))>0,$P(^TMP("PS",$J,ITMP,0),U)["N;O" Q<br> . S X=^TMP("PS",$J,ITMP,0)<br> . I '$L($P(X,U,2)) S X="??"  ; show something if drug empty<br> . I $D(^TMP("PS",$J,ITMP,"CLINIC",0)) S LST($$NXT)=$P(X,U,1,2)_U_$P(X,U,8,9)_U_"C"<br> . E  S LST($$NXT)=$P(X,U,1,2)_U_$P(X,U,8,9)<br> K ^TMP("PS",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}