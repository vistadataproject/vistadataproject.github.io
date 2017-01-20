---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT1 PCDETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT1 PCDETAIL{:/}
 tag | {::nomarkdown}PCDETAIL{:/}
 routine | [ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns primary care detailed information about a patient.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PCDETAIL^[ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 Method comment | return Primary Care Detail information
 First comment | {::nomarkdown}<pre>Input - PATIENT = Patient DFN<br/>Output - LST = Array of Patient Team Assignment Details<br/><br/> Source of data for CPRS is now a web service call to PCMM Web - 387<br/> Other callers will get original data format<br/> ICR #6027 - SCMC PCMM/R GET PRIMARY CARE DETAILS<br/><br/>new for PCMM Web requirements<br/>RPC Broker sets XQCY0 to the caller's context</pre>{:/}
 Input parameters | {::nomarkdown}PATIENT{:/}
 Code | {::nomarkdown}  IF $GET(XQCY0)["CPRSChart" DO  QUIT<br> . DO PCDETAIL^SCMCWS1(.LST,PATIENT)<br> N ILST,X S ILST=0<br> S X=$$OUTPTTM^SDUTL3(PATIENT,DT)<br> I +X>0 D<br> . S ILST=ILST+1,LST(ILST)="        Primary Care Team:  "_$P(X,U,2)<br> . S ILST=ILST+1,LST(ILST)="                    Phone:  "_$P($G(^SCTM(404.51,+X,0)),U,2)<br> E  S ILST=ILST+1,LST(ILST)="No Primary Care Team Assigned."<br> S ILST=ILST+1,LST(ILST)=" "<br> S X=$$OUTPTPR^SDUTL3(PATIENT,DT)<br> I +X>0 D<br> . S ILST=ILST+1,LST(ILST)="    Primary Care Provider:  "_$P(X,U,2)<br> . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br> . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br> . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)<br> E  S ILST=ILST+1,LST(ILST)="No Primary Care Provider Assigned."<br> S ILST=ILST+1,LST(ILST)=" "<br> S X=$$OUTPTAP^SDUTL3(PATIENT,DT)<br> I +X>0 D<br> . S ILST=ILST+1,LST(ILST)="       Associate Provider:  "_$P(X,U,2)<br> . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br> . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br> . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)<br> E  S ILST=ILST+1,LST(ILST)="No Associate Provider Assigned."<br> S ILST=ILST+1,LST(ILST)=" "<br> I $$INPT(PATIENT) D<br> . S X=$G(^DPT(PATIENT,.1041))<br> . I +X D<br> . . S ILST=ILST+1,LST(ILST)="      Attending Physician:  "_$P($G(^VA(200,+X,0)),U)<br> . . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br> . . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br> . . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)<br> . E  S ILST=ILST+1,LST(ILST)="No Attending Physician Assigned."<br> . S ILST=ILST+1,LST(ILST)=" "<br> . S X=$G(^DPT(PATIENT,.104))<br> . I +X D<br> . . S ILST=ILST+1,LST(ILST)="       Inpatient Provider:  "_$P($G(^VA(200,+X,0)),U)<br> . . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br> . . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br> . . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)<br> . E  S ILST=ILST+1,LST(ILST)="No Inpatient Provider Assigned."<br> . S ILST=ILST+1,LST(ILST)=" "<br> S X=0<br> S X=$$START^SCMCMHTC(PATIENT) ;Retrieve Mental Health Provider<br> I +X>0 D<br> . S ILST=ILST+1,LST(ILST)="        MH Treatment Team:  "_$P(X,U,5)<br> . S ILST=ILST+1,LST(ILST)=" MH Treatment Coordinator:  "_$P(X,U,2)<br> . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)<br> . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)<br> . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rMisc.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}