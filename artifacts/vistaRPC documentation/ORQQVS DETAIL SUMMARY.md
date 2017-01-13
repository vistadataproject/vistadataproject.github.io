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
 Lines | ```
 N CR,ORTY,ORY,TDT
 S TDT=0
 K ^TMP("TIULIST",$J)
 D SUMMARY^TIUSRVLV(.ORY,ORVIEN)
 I '+$O(^TMP("TIULIST",$J,0)) D  Q
 . S ORVY(1)="No Discharge Summary found for this stay."
 F  S TDT=$O(^TMP("TIULIST",$J,TDT)) Q:+TDT'>0  D
 . N SEQ,TIEN S SEQ=0
 . F  S SEQ=$O(^TMP("TIULIST",$J,TDT,SEQ)) Q:+SEQ'>0  D
 . . N TSEQ,ORVI K ^TMP("TIUVIEW",$J)
 . . S TIEN=$P(^TMP("TIULIST",$J,TDT,SEQ),U)
 . . D TGET^TIUSRVR1(.ORTY,TIEN)
 . . S TSEQ=0,ORVI=1
 . . F  S TSEQ=$O(@ORTY@(TSEQ)) Q:TSEQ=""  D
 . . . S ORVY(ORVI)=@ORTY@(TSEQ),ORVI=ORVI+1
 . . S ORVY(ORVI)=" ",ORVI=ORVI+1
 . . S ORVY(ORVI)=" ",ORVI=ORVI+1
 K ^TMP("TIULIST",$J)
```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from File #2 (Patient).{:/} | 
| {::nomarkdown}Visit{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Visit identifier.{:/} | 




 Generated on January 13th 2017, 6:55:28 am