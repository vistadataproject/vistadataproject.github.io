---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT CLINIC PATIENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT CLINIC PATIENTS{:/}
 tag | {::nomarkdown}CLINPTS{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns patients with appointments at a clinic between start and stop dates{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN LIST OF PTS W/CLINIC APPT W/IN BEGINNING AND END DATES
 Input Parameters | {::nomarkdown}CLIN<br/>ORBDATE<br/>OREDATE<br/>MAXAPPTS<br/>APPTBGN<br/>APPTEND{:/}
 Lines | ```
 I +$G(CLIN)<1 S Y(1)="^No clinic identified" Q 
 I $$ACTLOC^ORWU(CLIN)'=1 S Y(1)="^Clinic is inactive or Occasion Of Service" Q
 N ORSRV,ORRESULT,ORERR,ORI,ORPT,ORPTSTAT,ORAPPT,ORCLIN,SDARRAY,NODE
 I $L($G(MAXAPPTS))=0 S MAXAPPTS=200
 S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)
 I ORBDATE="" S ORBDATE=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC START DATE",1,"E"))
 I OREDATE="" S OREDATE=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC STOP DATE",1,"E"))
 D DT^DILF("T",ORBDATE,.ORBDATE,"","")
 D DT^DILF("T",OREDATE,.OREDATE,"","")
 I (ORBDATE=-1)!(OREDATE=-1) S Y(1)="^Error in date range." Q 
 S OREDATE=$P(OREDATE,".")_.5 ; Add 1/2 day to end date.
 K ^TMP($J,"SDAMA301") ; Clean house before starting.
 S ORRESULT=""
 S ORCLIN=+CLIN
 S SDARRAY(1)=ORBDATE_";"_OREDATE
 S SDARRAY(2)=+CLIN
 S SDARRAY(3)="R;I;NT"
 S SDARRAY("SORT")="P" ;no clinic index
 S SDARRAY("FLDS")="3;4"  ;ApptStatus^IEN;PtName
 I MAXAPPTS S SDARRAY("MAX")=MAXAPPTS
 S ORRESULT=$$SDAPI^SDAMA301(.SDARRAY) ; DBIA 4433
 I ORRESULT<0 D  S Y(1)=U_ORERR Q
 .S ORERR=""
 .N IDXERR S IDXERR=$O(^TMP($J,"SDAMA301","")) Q:IDXERR'>0
 .S ORERR=^TMP($J,"SDAMA301",IDXERR)
 S (ORPT,ORI)=0
 I ORRESULT'>0 S Y(1)="^No appointments." Q
 F  S ORPT=$O(^TMP($J,"SDAMA301",ORPT)) Q:ORPT=""  D
 .S ORAPPT=""
 .F  S ORAPPT=$O(^TMP($J,"SDAMA301",ORPT,ORAPPT)) Q:ORAPPT=""  D
 ..S ORI=ORI+1
 ..S NODE=^TMP($J,"SDAMA301",ORPT,ORAPPT)
 ..S Y(ORI)=$TR($P(NODE,U,4),";","^") ; IEN^Name.
 ..S Y(ORI)=Y(ORI)_U_ORCLIN ; ^Clinic IEN.
 ..S Y(ORI)=Y(ORI)_U_ORAPPT ; App't.
 ..I $L($G(APPTEND))=0 S APPTEND=ORAPPT,APPTBGN=ORAPPT
 ..I ORAPPT>APPTEND S APPTEND=ORAPPT
 ..I ORAPPT<APPTBGN S APPTBGN=ORAPPT
 ..S ORPTSTAT=$P($P(NODE,U,3),";",1) ;appt status, will be transformed to pt status.
 ..S ORPTSTAT=$S(ORPTSTAT="I":"IPT",ORPTSTAT="R":"OPT",ORPTSTAT="NT":"OPT",1:"") ; Pt Status.
 ..S Y(ORI)=Y(ORI)_U_U_U_U_U_ORPTSTAT ; Pt I or O status (or "NT").
 K ^TMP($J,"SDAMA301") ; Clean house after finishing.```
 Leading comment lines | {::nomarkdown}PKS-8/2003: Modified for new scheduling pkg APIs.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINIC ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the clinic from the Hospital Location File (#44).{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The start date of the clinic appointments to retrieve (not in FM format.){:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The stop date of the clinic appointments to retrieve (not in Fileman format.){:/} | 




 Generated on January 13th 2017, 6:55:28 am