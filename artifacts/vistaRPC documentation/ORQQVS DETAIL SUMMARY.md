---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVS DETAIL SUMMARY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVS DETAIL SUMMARY{:/}
 tag | {::nomarkdown}DETSUM{:/}
 routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns discharge summary for a visit.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return discharge summary for a patient's visit
 Input Parameters | {::nomarkdown}ORPT<br/>ORVIEN{:/}
 Lines | ```{::nomarkdown} N CR,ORTY,ORY,TDT<br/> S TDT=0<br/> K ^TMP("TIULIST",$J)<br/> D SUMMARY^TIUSRVLV(.ORY,ORVIEN)<br/> I '+$O(^TMP("TIULIST",$J,0)) D  Q<br/> . S ORVY(1)="No Discharge Summary found for this stay."<br/> F  S TDT=$O(^TMP("TIULIST",$J,TDT)) Q:+TDT'>0  D<br/> . N SEQ,TIEN S SEQ=0<br/> . F  S SEQ=$O(^TMP("TIULIST",$J,TDT,SEQ)) Q:+SEQ'>0  D<br/> . . N TSEQ,ORVI K ^TMP("TIUVIEW",$J)<br/> . . S TIEN=$P(^TMP("TIULIST",$J,TDT,SEQ),U)<br/> . . D TGET^TIUSRVR1(.ORTY,TIEN)<br/> . . S TSEQ=0,ORVI=1<br/> . . F  S TSEQ=$O(@ORTY@(TSEQ)) Q:TSEQ=""  D<br/> . . . S ORVY(ORVI)=@ORTY@(TSEQ),ORVI=ORVI+1<br/> . . S ORVY(ORVI)=" ",ORVI=ORVI+1<br/> . . S ORVY(ORVI)=" ",ORVI=ORVI+1<br/> K ^TMP("TIULIST",$J)<br/>```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from File #2 (Patient).{:/} | 
| {::nomarkdown}Visit{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Visit identifier.{:/} | 




 Generated on January 13th 2017, 7:11:26 am