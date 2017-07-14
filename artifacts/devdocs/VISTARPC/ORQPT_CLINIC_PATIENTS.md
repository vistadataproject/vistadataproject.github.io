---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT CLINIC PATIENTS<br/>
# ORQPT CLINIC PATIENTS

Returns patients with appointments at a clinic between start and stop dates

## Properties

Property | Value
--- | ---
Label | CLINPTS
Routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLINIC ID | LITERAL | 16 | true | The record number of the clinic from the Hospital Location File (#44).
START DATE | LITERAL | 16 |  | The start date of the clinic appointments to retrieve (not in FM format.)
STOP DATE | LITERAL | 16 |  | The stop date of the clinic appointments to retrieve (not in Fileman format.)



## MUMPS Method Description

Property | Value
--- | ---
Method | [CLINPTS^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Method Comment | RETURN LIST OF PTS W/CLINIC APPT W/IN BEGINNING AND END DATES
Input Parameters | CLIN, ORBDATE, OREDATE, MAXAPPTS, APPTBGN, APPTEND
First Comment | {::nomarkdown}<pre><code> PKS-8/2003: Modified for new scheduling pkg APIs.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I +$G(CLIN)<1 S Y(1)="^No clinic identified" Q <br/> I $$ACTLOC^ORWU(CLIN)'=1 S Y(1)="^Clinic is inactive or Occasion Of Service" Q<br/> N ORSRV,ORRESULT,ORERR,ORI,ORPT,ORPTSTAT,ORAPPT,ORCLIN,SDARRAY,NODE<br/> I $L($G(MAXAPPTS))=0 S MAXAPPTS=200<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br/> I ORBDATE="" S ORBDATE=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC START DATE",1,"E"))<br/> I OREDATE="" S OREDATE=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC STOP DATE",1,"E"))<br/> D DT^DILF("T",ORBDATE,.ORBDATE,"","")<br/> D DT^DILF("T",OREDATE,.OREDATE,"","")<br/> I (ORBDATE=-1)!(OREDATE=-1) S Y(1)="^Error in date range." Q <br/> S OREDATE=$P(OREDATE,".")_.5 ; Add 1/2 day to end date.<br/> K ^TMP($J,"SDAMA301") ; Clean house before starting.<br/> S ORRESULT=""<br/> S ORCLIN=+CLIN<br/> S SDARRAY(1)=ORBDATE_";"_OREDATE<br/> S SDARRAY(2)=+CLIN<br/> S SDARRAY(3)="R;I;NT"<br/> S SDARRAY("SORT")="P" ;no clinic index<br/> S SDARRAY("FLDS")="3;4"  ;ApptStatus^IEN;PtName<br/> I MAXAPPTS S SDARRAY("MAX")=MAXAPPTS<br/> S ORRESULT=$$SDAPI^SDAMA301(.SDARRAY) ; DBIA 4433<br/> I ORRESULT<0 D  S Y(1)=U_ORERR Q<br/> .S ORERR=""<br/> .N IDXERR S IDXERR=$O(^TMP($J,"SDAMA301","")) Q:IDXERR'>0<br/> .S ORERR=^TMP($J,"SDAMA301",IDXERR)<br/> S (ORPT,ORI)=0<br/> I ORRESULT'>0 S Y(1)="^No appointments." Q<br/> F  S ORPT=$O(^TMP($J,"SDAMA301",ORPT)) Q:ORPT=""  D<br/> .S ORAPPT=""<br/> .F  S ORAPPT=$O(^TMP($J,"SDAMA301",ORPT,ORAPPT)) Q:ORAPPT=""  D<br/> ..S ORI=ORI+1<br/> ..S NODE=^TMP($J,"SDAMA301",ORPT,ORAPPT)<br/> ..S Y(ORI)=$TR($P(NODE,U,4),";","^") ; IEN^Name.<br/> ..S Y(ORI)=Y(ORI)_U_ORCLIN ; ^Clinic IEN.<br/> ..S Y(ORI)=Y(ORI)_U_ORAPPT ; App't.<br/> ..I $L($G(APPTEND))=0 S APPTEND=ORAPPT,APPTBGN=ORAPPT<br/> ..I ORAPPT>APPTEND S APPTEND=ORAPPT<br/> ..I ORAPPT<APPTBGN S APPTBGN=ORAPPT<br/> ..S ORPTSTAT=$P($P(NODE,U,3),";",1) ;appt status, will be transformed to pt status.<br/> ..S ORPTSTAT=$S(ORPTSTAT="I":"IPT",ORPTSTAT="R":"OPT",ORPTSTAT="NT":"OPT",1:"") ; Pt Status.<br/> ..S Y(ORI)=Y(ORI)_U_U_U_U_U_ORPTSTAT ; Pt I or O status (or "NT").<br/> K ^TMP($J,"SDAMA301") ; Clean house after finishing.</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}