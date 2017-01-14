---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT1 PCDETAIL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT1 PCDETAIL{:/}
 tag | {::nomarkdown}PCDETAIL{:/}
 routine | [ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns primary care detailed information about a patient.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PCDETAIL^[ORWPT1](http://code.osehra.org/dox/Routine_ORWPT1_source.html)
 Method comment | return Primary Care Detail information
 First comment | {::nomarkdown}Input - PATIENT = Patient DFN<br/>Output - LST = Array of Patient Team Assignment Details<br/>Source of data for CPRS is now a web service call to PCMM Web - 387<br/>Other callers will get original data format<br/>ICR #6027 - SCMC PCMM/R GET PRIMARY CARE DETAILS<br/>new for PCMM Web requirements<br/>RPC Broker sets XQCY0 to the caller's context{:/}
 Input parameters | {::nomarkdown}PATIENT{:/}
 Code | ```  IF $GET(XQCY0)["CPRSChart" DO  QUIT
 . DO PCDETAIL^SCMCWS1(.LST,PATIENT)
 N ILST,X S ILST=0
 S X=$$OUTPTTM^SDUTL3(PATIENT,DT)
 I +X>0 D
 . S ILST=ILST+1,LST(ILST)="        Primary Care Team:  "_$P(X,U,2)
 . S ILST=ILST+1,LST(ILST)="                    Phone:  "_$P($G(^SCTM(404.51,+X,0)),U,2)
 E  S ILST=ILST+1,LST(ILST)="No Primary Care Team Assigned."
 S ILST=ILST+1,LST(ILST)=" "
 S X=$$OUTPTPR^SDUTL3(PATIENT,DT)
 I +X>0 D
 . S ILST=ILST+1,LST(ILST)="    Primary Care Provider:  "_$P(X,U,2)
 . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)
 . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)
 . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)
 E  S ILST=ILST+1,LST(ILST)="No Primary Care Provider Assigned."
 S ILST=ILST+1,LST(ILST)=" "
 S X=$$OUTPTAP^SDUTL3(PATIENT,DT)
 I +X>0 D
 . S ILST=ILST+1,LST(ILST)="       Associate Provider:  "_$P(X,U,2)
 . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)
 . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)
 . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)
 E  S ILST=ILST+1,LST(ILST)="No Associate Provider Assigned."
 S ILST=ILST+1,LST(ILST)=" "
 I $$INPT(PATIENT) D
 . S X=$G(^DPT(PATIENT,.1041))
 . I +X D
 . . S ILST=ILST+1,LST(ILST)="      Attending Physician:  "_$P($G(^VA(200,+X,0)),U)
 . . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)
 . . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)
 . . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)
 . E  S ILST=ILST+1,LST(ILST)="No Attending Physician Assigned."
 . S ILST=ILST+1,LST(ILST)=" "
 . S X=$G(^DPT(PATIENT,.104))
 . I +X D
 . . S ILST=ILST+1,LST(ILST)="       Inpatient Provider:  "_$P($G(^VA(200,+X,0)),U)
 . . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)
 . . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)
 . . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)
 . E  S ILST=ILST+1,LST(ILST)="No Inpatient Provider Assigned."
 . S ILST=ILST+1,LST(ILST)=" "
 S X=0
 S X=$$START^SCMCMHTC(PATIENT) ;Retrieve Mental Health Provider
 I +X>0 D
 . S ILST=ILST+1,LST(ILST)="        MH Treatment Team:  "_$P(X,U,5)
 . S ILST=ILST+1,LST(ILST)=" MH Treatment Coordinator:  "_$P(X,U,2)
 . S ILST=ILST+1,LST(ILST)="             Analog Pager:  "_$P($G(^VA(200,+X,.13)),U,7)
 . S ILST=ILST+1,LST(ILST)="            Digital Pager:  "_$P($G(^VA(200,+X,.13)),U,8)
 . S ILST=ILST+1,LST(ILST)="             Office Phone:  "_$P($G(^VA(200,+X,.13)),U,2)```




 Generated on January 14th 2017, 7:26:35 am