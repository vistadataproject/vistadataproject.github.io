---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDFH PARAM<br/>
# ORWDFH PARAM

Returns dietetics parameters for a patient at a location.

## Properties

Property | Value
--- | ---
Label | PARAM
Routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PARAM^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return dietetics parameters for a patient at a location
Input Parameters | ORVP, ORLOC
First Comment | {::nomarkdown}<pre><code> ORLOC: hospital location ptr to ^SC #44<br/> ORLST(1)=EB1^EB2^EB3^LB1^LB2^LB3^EN1^EN2^...LE2^LE3<br/> ORLST(2)=BAB^BAE^NAB^NAE^EAB^EAE^BegB^BegN^BegE^Bagged<br/> ORLST(3)=type of service^RegIEN^NPOIEN^EarlyIEN^LateIEN^TFIFN<br/> ORLST(4)=max days in future for outpatient recurring meals<br/> ORLST(5)=default outpatient diet</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'+ORVP<br/> N X,IEN,CURTM<br/> S ORVP=+ORVP_";DPT(",ORLOC=+ORLOC<br/> S CURTM=$$NOW^XLFDT<br/> I +$G(^SC(ORLOC,42)) S ORLOC=$G(^SC(ORLOC,42))_";DIC(42"<br/> E  S ORLOC=ORLOC_";SC("<br/> D EN1^FHWOR8(ORLOC,.ORLST)<br/> S:'$D(ORLST(1)) ORLST(1)="" S:'$D(ORLST(2)) ORLST(2)="" ;p375 corrected array return for missing/invalid location<br/> I '$L($G(ORLST(3))) S ORLST(3)="TCD" ;p375 changed default from "T" to "TCD" <br/> S $P(ORLST(3),U,2)=$O(^ORD(101.43,"S.DIET","REGULAR",0))<br/> S $P(ORLST(3),U,3)=$O(^ORD(101.43,"S.DIET","NPO",0))<br/> S $P(ORLST(3),U,4)=$O(^ORD(101.43,"S.E/L T","EARLY TRAY",0))<br/> S $P(ORLST(3),U,5)=$O(^ORD(101.43,"S.E/L T","LATE TRAY",0))<br/> N TF S TF=$$CURRENT^ORCDFH("TF") I $L(TF,";")=1 S TF=TF_";1"<br/> I TF,'$$FUTURE^ORCDFH("EFFECTIVE DATE/TIME") S $P(ORLST(3),U,6)=TF<br/> I $$VERSION^XPDUTL("FH")>5 D<br/> . S ORLST(4)=$$MAXDAYS^FHOMAPI(ORLOC)<br/> . D DIETLST^FHOMAPI Q:'$G(FHDIET(1))<br/> . S IEN=$O(^ORD(101.43,"ID",$P(FHDIET(1),U,1)_";99FHD",0)) Q:+IEN=0<br/> . S X=^ORD(101.43,"S.DIET",$P(FHDIET(1),U,2),IEN)<br/> . I +$P(X,U,3),$P(X,U,3)<CURTM Q<br/> . I $P($G(^ORD(101.43,IEN,"FH")),U)'="D",($P($G(^(0)),U)'="NPO") Q<br/> . S ORLST(5)=+$G(IEN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}