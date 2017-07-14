---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVS DETAIL NOTES<br/>
# ORQQVS DETAIL NOTES

Returns the progress notes based on patient and visit identifier.

## Properties

Property | Value
--- | ---
Label | DETNOTE
Routine | [ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Patient DFN | LITERAL | 16 | true | Patient identifier (DFN) from File #2 (Patient).
Visit | LITERAL | 16 | true | Visit identifier.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DETNOTE^ORQQVS](http://code.osehra.org/dox/Routine_ORQQVS_source.html)
Method Comment | return progress notes for a patient&#x27;s visit
Input Parameters | ORPT, ORVIEN
Code | {::nomarkdown}<pre><code> N ORTY,ORY,TDT,ORVI<br/> S TDT=0<br/> K ^TMP("TIULIST",$J)  ;DBIA 2812<br/> D NOTES^TIUSRVLV(.ORY,ORVIEN)  ;DBIA 2812<br/> I '+$O(^TMP("TIULIST",$J,0)) D  Q<br/> . S ORVY(1)="No Progress Notes for this visit."<br/> S ORVI=1<br/> F  S TDT=$O(^TMP("TIULIST",$J,TDT)) Q:+TDT'>0  D<br/> . N SEQ,TIEN S SEQ=0<br/> . F  S SEQ=$O(^TMP("TIULIST",$J,TDT,SEQ)) Q:+SEQ'>0  D<br/> . . N TSEQ K ^TMP("TIUVIEW",$J)  ;DBIA 2944<br/> . . S TIEN=$P(^TMP("TIULIST",$J,TDT,SEQ),U)<br/> . . D TGET^TIUSRVR1(.ORTY,TIEN)  ;DBIA 2944<br/> . . S TSEQ=0<br/> . . F  S TSEQ=$O(@ORTY@(TSEQ)) Q:TSEQ=""  D<br/> . . . S ORVY(ORVI)=@ORTY@(TSEQ),ORVI=ORVI+1<br/> . . S ORVY(ORVI)=" ",ORVI=ORVI+1<br/> . . S ORVY(ORVI)=" ",ORVI=ORVI+1<br/> K ^TMP("TIULIST",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}