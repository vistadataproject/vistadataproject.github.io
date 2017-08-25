---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVS DETAIL SUMMARY<br/>
# ORQQVS DETAIL SUMMARY

Returns discharge summary for a visit.

## Properties

Property | Value
--- | ---
Label | DETSUM
MUMPS Implementation | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Patient | LITERAL | 16 | true | Patient identifier (DFN) from File #2 (Patient).
Visit | LITERAL | 16 | true | Visit identifier.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DETSUM^ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
Method Comment | return discharge summary for a patient&#x27;s visit
Input Parameters | ORPT, ORVIEN
Code | {::nomarkdown}<pre><code> N CR,ORTY,ORY,TDT<br/> S TDT=0<br/> K ^TMP("TIULIST",$J)<br/> D SUMMARY^TIUSRVLV(.ORY,ORVIEN)<br/> I '+$O(^TMP("TIULIST",$J,0)) D  Q<br/> . S ORVY(1)="No Discharge Summary found for this stay."<br/> F  S TDT=$O(^TMP("TIULIST",$J,TDT)) Q:+TDT'>0  D<br/> . N SEQ,TIEN S SEQ=0<br/> . F  S SEQ=$O(^TMP("TIULIST",$J,TDT,SEQ)) Q:+SEQ'>0  D<br/> . . N TSEQ,ORVI K ^TMP("TIUVIEW",$J)<br/> . . S TIEN=$P(^TMP("TIULIST",$J,TDT,SEQ),U)<br/> . . D TGET^TIUSRVR1(.ORTY,TIEN)<br/> . . S TSEQ=0,ORVI=1<br/> . . F  S TSEQ=$O(@ORTY@(TSEQ)) Q:TSEQ=""  D<br/> . . . S ORVY(ORVI)=@ORTY@(TSEQ),ORVI=ORVI+1<br/> . . S ORVY(ORVI)=" ",ORVI=ORVI+1<br/> . . S ORVY(ORVI)=" ",ORVI=ORVI+1<br/> K ^TMP("TIULIST",$J)<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}