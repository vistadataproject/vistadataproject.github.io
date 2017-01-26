---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVS DETAIL NOTES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVS DETAIL NOTES{:/}
 tag | {::nomarkdown}DETNOTE{:/}
 routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the progress notes based on patient and visit identifier.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from File #2 (Patient).{:/} | 
| {::nomarkdown}Visit{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Visit identifier.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DETNOTE^[ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 Method comment | return progress notes for a patient's visit
 Input parameters | {::nomarkdown}ORPT, ORVIEN{:/}
 Code | {::nomarkdown}  N ORTY,ORY,TDT,ORVI<br> S TDT=0<br> K ^TMP("TIULIST",$J)  ;DBIA 2812<br> D NOTES^TIUSRVLV(.ORY,ORVIEN)  ;DBIA 2812<br> I '+$O(^TMP("TIULIST",$J,0)) D  Q<br> . S ORVY(1)="No Progress Notes for this visit."<br> S ORVI=1<br> F  S TDT=$O(^TMP("TIULIST",$J,TDT)) Q:+TDT'>0  D<br> . N SEQ,TIEN S SEQ=0<br> . F  S SEQ=$O(^TMP("TIULIST",$J,TDT,SEQ)) Q:+SEQ'>0  D<br> . . N TSEQ K ^TMP("TIUVIEW",$J)  ;DBIA 2944<br> . . S TIEN=$P(^TMP("TIULIST",$J,TDT,SEQ),U)<br> . . D TGET^TIUSRVR1(.ORTY,TIEN)  ;DBIA 2944<br> . . S TSEQ=0<br> . . F  S TSEQ=$O(@ORTY@(TSEQ)) Q:TSEQ=""  D<br> . . . S ORVY(ORVI)=@ORTY@(TSEQ),ORVI=ORVI+1<br> . . S ORVY(ORVI)=" ",ORVI=ORVI+1<br> . . S ORVY(ORVI)=" ",ORVI=ORVI+1<br> K ^TMP("TIULIST",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}