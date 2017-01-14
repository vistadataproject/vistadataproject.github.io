---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQVS DETAIL NOTES 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVS DETAIL NOTES{:/}
 tag | {::nomarkdown}DETNOTE{:/}
 routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the progress notes based on patient and visit identifier.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from File #2 (Patient).{:/} | 
| {::nomarkdown}Visit{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Visit identifier.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DETNOTE^[ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 Method comment | return progress notes for a patient's visit
 Input parameters | {::nomarkdown}ORPT<br/>ORVIEN{:/}
 Code | ```  N ORTY,ORY,TDT,ORVI
 S TDT=0
 K ^TMP("TIULIST",$J)  ;DBIA 2812
 D NOTES^TIUSRVLV(.ORY,ORVIEN)  ;DBIA 2812
 I '+$O(^TMP("TIULIST",$J,0)) D  Q
 . S ORVY(1)="No Progress Notes for this visit."
 S ORVI=1
 F  S TDT=$O(^TMP("TIULIST",$J,TDT)) Q:+TDT'>0  D
 . N SEQ,TIEN S SEQ=0
 . F  S SEQ=$O(^TMP("TIULIST",$J,TDT,SEQ)) Q:+SEQ'>0  D
 . . N TSEQ K ^TMP("TIUVIEW",$J)  ;DBIA 2944
 . . S TIEN=$P(^TMP("TIULIST",$J,TDT,SEQ),U)
 . . D TGET^TIUSRVR1(.ORTY,TIEN)  ;DBIA 2944
 . . S TSEQ=0
 . . F  S TSEQ=$O(@ORTY@(TSEQ)) Q:TSEQ=""  D
 . . . S ORVY(ORVI)=@ORTY@(TSEQ),ORVI=ORVI+1
 . . S ORVY(ORVI)=" ",ORVI=ORVI+1
 . . S ORVY(ORVI)=" ",ORVI=ORVI+1
 K ^TMP("TIULIST",$J)```




 Generated on January 14th 2017, 7:26:35 am