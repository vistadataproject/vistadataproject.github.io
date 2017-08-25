---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXVB GETALL<br/>
# ORWDXVB GETALL

Return patient's Blood Bank information.

## Properties

Property | Value
--- | ---
Label | GETALL
MUMPS Implementation | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETALL^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Method Comment | Get all data in one call and let the GUI divide it up
Input Parameters | DFN, LOC
Code | {::nomarkdown}<pre><code> N ORX,INFO,CNT,I,J,K,OREAS,OREASON<br/> S OROOT=$NA(^TMP("ORVBECINFO",$J)),CNT=1<br/> D GETPAT(.ORX,DFN,LOC)<br/> I $L($G(ORX("SPECIMEN"))) S:$P(ORX("SPECIMEN"),"^") $P(ORX("SPECIMEN"),"^")=$$HL7TFM^XLFDT($P(ORX("SPECIMEN"),"^")) S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~SPECIMEN",CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORX("SPECIMEN")<br/> I $L($G(ORX("ABORH"))) S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~ABORH",CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORX("ABORH")<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~TYPE AND SCREEN",CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_$O(^ORD(101.43,"ID","1;99VBC",0))<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~OTHER",CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_$O(^ORD(101.43,"ID","6;99VBC",0))<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~SPECIMENS",I=0<br/> F  S I=$O(ORX(I)) Q:'I  S J="" F  S J=$O(ORX(I,J)) Q:J=""  I J="SPECIMEN" S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_I_"^"_ORX(I,J)<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~TESTS",I=0<br/> F  S I=$O(ORX(I)) Q:'I  S J="" F  S J=$O(ORX(I,J)) Q:J=""  I J="TEST" S K=0 F  S K=$O(ORX(I,J,K)) Q:'K  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_I_"^"_K_"^"_ORX(I,J,K)<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~MSBOS",I=0<br/> F  S I=$O(ORX(I)) Q:'I  S J="" F  S J=$O(ORX(I,J)) Q:J=""  I J="MSBOS" S K=0 F  S K=$O(ORX(I,J,K)) Q:'K  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_I_"^"_K_"^"_ORX(I,J,K),$P(^(CNT),"^",4)=+$P(ORX(I,J,K),"^",2)<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~SURGERIES",I=0<br/> F  S I=$O(ORX("SURGERY",I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_I_"^"_ORX("SURGERY",I)<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~URGENCIES",I=""<br/> F  S I=$O(^ORD(101.42,"S.VBEC",I)) Q:I=""  S J=0 F  S J=$O(^ORD(101.42,"S.VBEC",I,J)) Q:'J  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_J_"^"_I<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~MODIFIERS",I=""<br/> N ORMODS D GETLST^XPAR(.ORMODS,"ALL","OR VBECS MODIFIERS","I")<br/> F  S I=$O(ORMODS(I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORMODS(I)<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~REASONS",I=""<br/> N ORMODS D GETLST^XPAR(.ORMODS,"ALL","OR VBECS REASON FOR REQUEST","I")<br/> S OREASON=$$GET^XPAR("DIV^SYS^PKG","OR VBECS REASON SORT ALPHA",1,"Q")<br/> I OREASON D<br/> . F  S I=$O(ORMODS(I)) Q:'I  S OREAS(" "_$$UP^XLFSTR(ORMODS(I)))=ORMODS(I)<br/> . S I="" F  S I=$O(OREAS(I)) Q:I=""  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_OREAS(I)<br/> I 'OREASON D<br/> . F  S I=$O(ORMODS(I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORMODS(I)<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~INFO"<br/> D PTINFO(.INFO,.ORX)<br/> S I=0 F  S I=$O(^TMP("ORVBEC",$J,I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_^TMP("ORVBEC",$J,I,0)<br/> S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="~TNS ORDERS"<br/> N ORMODS D PULL^ORWDXVB2(.ORMODS,DFN)<br/> S I=0 F  S I=$O(ORMODS(I)) Q:'I  S CNT=CNT+1,^TMP("ORVBECINFO",$J,CNT)="i"_ORMODS(I)<br/> K ^TMP("ORVBEC",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}