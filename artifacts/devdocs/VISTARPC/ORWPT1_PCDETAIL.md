---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT1 PCDETAIL<br/>
# ORWPT1 PCDETAIL

Returns primary care detailed information about a patient.

## Properties

Property | Value
--- | ---
Label | PCDETAIL
MUMPS Implementation | [ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PCDETAIL^ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
Method Comment | return Primary Care Detail information
Input Parameters | PATIENT
First Comment | {::nomarkdown}<pre><code>Input - PATIENT = Patient DFN<br/>Output - LST = Array of Patient Team Assignment Details<br/><br/> Source of data for CPRS is now a web service call to PCMM Web - 387<br/> Other callers will get original data format<br/> ICR #6027 - SCMC PCMM/R GET PRIMARY CARE DETAILS<br/><br/>new for PCMM Web requirements<br/>RPC Broker sets XQCY0 to the caller's context</code></pre>{:/}
Code | {::nomarkdown}<pre><code> IF $GET(XQCY0)["CPRSChart" DO  QUIT<br/> . DO PCDETAIL^SCMCWS1(.LST,PATIENT)<br/> N ILST,X S ILST=0<br/> S X=$$OUTPTTM^SDUTL3(PATIENT,DT)<br/> I +X>0 D<br/> . S ILST=ILST+1,LST(ILST)="        Primary Care Team:  "_$P(X,U,2)<br/> . S ILST=ILST+1,LST(ILST)="                    Phone:  "_$P($G(^SCTM(404.51,+X,0)),U,2)<br/> E  S ILST=ILST+1,LST(ILST)="No Primary Care Team Assigned."<br/> S ILST=ILST+1,LST(ILST)=" "<br/> S X=$$OUTPTPR^SDUTL3(PATIENT,DT)<br/> I +X>0 D<br/> . S ILST=ILST+1,LST(ILST)="    Primary Care Provider:  "_$P(X,U,2)<br/> . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br/> . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br/> . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)<br/> E  S ILST=ILST+1,LST(ILST)="No Primary Care Provider Assigned."<br/> S ILST=ILST+1,LST(ILST)=" "<br/> S X=$$OUTPTAP^SDUTL3(PATIENT,DT)<br/> I +X>0 D<br/> . S ILST=ILST+1,LST(ILST)="       Associate Provider:  "_$P(X,U,2)<br/> . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br/> . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br/> . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)<br/> E  S ILST=ILST+1,LST(ILST)="No Associate Provider Assigned."<br/> S ILST=ILST+1,LST(ILST)=" "<br/> I $$INPT(PATIENT) D<br/> . S X=$G(^DPT(PATIENT,.1041))<br/> . I +X D<br/> . . S ILST=ILST+1,LST(ILST)="      Attending Physician:  "_$P($G(^VA(200,+X,0)),U)<br/> . . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br/> . . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br/> . . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)<br/> . E  S ILST=ILST+1,LST(ILST)="No Attending Physician Assigned."<br/> . S ILST=ILST+1,LST(ILST)=" "<br/> . S X=$G(^DPT(PATIENT,.104))<br/> . I +X D<br/> . . S ILST=ILST+1,LST(ILST)="       Inpatient Provider:  "_$P($G(^VA(200,+X,0)),U)<br/> . . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br/> . . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br/> . . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)<br/> . E  S ILST=ILST+1,LST(ILST)="No Inpatient Provider Assigned."<br/> . S ILST=ILST+1,LST(ILST)=" "<br/> S X=0<br/> S X=$$START^SCMCMHTC(PATIENT) ;Retrieve Mental Health Provider<br/> I +X>0 D<br/> . S ILST=ILST+1,LST(ILST)="        MH Treatment Team:  "_$P(X,U,5)<br/> . S ILST=ILST+1,LST(ILST)=" MH Treatment Coordinator:  "_$P(X,U,2)<br/> . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br/> . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br/> . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}