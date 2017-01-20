---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT CLINIC PATIENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT CLINIC PATIENTS{:/}
 tag | {::nomarkdown}CLINPTS{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns patients with appointments at a clinic between start and stop dates{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINIC ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the clinic from the Hospital Location File (#44).{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The start date of the clinic appointments to retrieve (not in FM format.){:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The stop date of the clinic appointments to retrieve (not in Fileman format.){:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CLINPTS^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF PTS W/CLINIC APPT W/IN BEGINNING AND END DATES
 First comment | {::nomarkdown}<pre> PKS-8/2003: Modified for new scheduling pkg APIs.</pre>{:/}
 Input parameters | {::nomarkdown}CLIN<br>ORBDATE<br>OREDATE<br>MAXAPPTS<br>APPTBGN<br>APPTEND{:/}
 Code | {::nomarkdown}  I +$G(CLIN)<1 S Y(1)="^No clinic identified" Q <br> I $$ACTLOC^ORWU(CLIN)'=1 S Y(1)="^Clinic is inactive or Occasion Of Service" Q<br> N ORSRV,ORRESULT,ORERR,ORI,ORPT,ORPTSTAT,ORAPPT,ORCLIN,SDARRAY,NODE<br> I $L($G(MAXAPPTS))=0 S MAXAPPTS=200<br> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br> I ORBDATE="" S ORBDATE=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC START DATE",1,"E"))<br> I OREDATE="" S OREDATE=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC STOP DATE",1,"E"))<br> D DT^DILF("T",ORBDATE,.ORBDATE,"","")<br> D DT^DILF("T",OREDATE,.OREDATE,"","")<br> I (ORBDATE=-1)!(OREDATE=-1) S Y(1)="^Error in date range." Q <br> S OREDATE=$P(OREDATE,".")_.5 ; Add 1/2 day to end date.<br> K ^TMP($J,"SDAMA301") ; Clean house before starting.<br> S ORRESULT=""<br> S ORCLIN=+CLIN<br> S SDARRAY(1)=ORBDATE_";"_OREDATE<br> S SDARRAY(2)=+CLIN<br> S SDARRAY(3)="R;I;NT"<br> S SDARRAY("SORT")="P" ;no clinic index<br> S SDARRAY("FLDS")="3;4"  ;ApptStatus^IEN;PtName<br> I MAXAPPTS S SDARRAY("MAX")=MAXAPPTS<br> S ORRESULT=$$SDAPI^SDAMA301(.SDARRAY) ; DBIA 4433<br> I ORRESULT<0 D  S Y(1)=U_ORERR Q<br> .S ORERR=""<br> .N IDXERR S IDXERR=$O(^TMP($J,"SDAMA301","")) Q:IDXERR'>0<br> .S ORERR=^TMP($J,"SDAMA301",IDXERR)<br> S (ORPT,ORI)=0<br> I ORRESULT'>0 S Y(1)="^No appointments." Q<br> F  S ORPT=$O(^TMP($J,"SDAMA301",ORPT)) Q:ORPT=""  D<br> .S ORAPPT=""<br> .F  S ORAPPT=$O(^TMP($J,"SDAMA301",ORPT,ORAPPT)) Q:ORAPPT=""  D<br> ..S ORI=ORI+1<br> ..S NODE=^TMP($J,"SDAMA301",ORPT,ORAPPT)<br> ..S Y(ORI)=$TR($P(NODE,U,4),";","^") ; IEN^Name.<br> ..S Y(ORI)=Y(ORI)_U_ORCLIN ; ^Clinic IEN.<br> ..S Y(ORI)=Y(ORI)_U_ORAPPT ; App't.<br> ..I $L($G(APPTEND))=0 S APPTEND=ORAPPT,APPTBGN=ORAPPT<br> ..I ORAPPT>APPTEND S APPTEND=ORAPPT<br> ..I ORAPPT<APPTBGN S APPTBGN=ORAPPT<br> ..S ORPTSTAT=$P($P(NODE,U,3),";",1) ;appt status, will be transformed to pt status.<br> ..S ORPTSTAT=$S(ORPTSTAT="I":"IPT",ORPTSTAT="R":"OPT",ORPTSTAT="NT":"OPT",1:"") ; Pt Status.<br> ..S Y(ORI)=Y(ORI)_U_U_U_U_U_ORPTSTAT ; Pt I or O status (or "NT").<br> K ^TMP($J,"SDAMA301") ; Clean house after finishing.{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}