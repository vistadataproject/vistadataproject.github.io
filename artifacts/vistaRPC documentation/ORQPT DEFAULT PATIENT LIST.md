---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT DEFAULT PATIENT LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT DEFAULT PATIENT LIST{:/}
 tag | {::nomarkdown}DEFLIST{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Function returns the current user's default patient list.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEFLIST^[ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 Method comment | return current user's default patient list
 Code | {::nomarkdown}  I $$BROKER^XWBLIB S Y=$NA(^TMP("OR",$J,"PATIENTS")) ; GUI = global.<br> I '$$BROKER^XWBLIB S ^TMP("OR",$J,"PATIENTS",0)=""<br> Q:'$D(DUZ)<br> N FROM,IEN,BEG,END,API,ORSRV,ORQDAT,ORQCNT,ORGUI<br> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U) ; Get S/S.<br> S FROM=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT LIST SOURCE",1,"Q")<br> Q:'$L($G(FROM))<br> I FROM="T" S IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT TEAM",1,"Q") D:+$G(IEN)>0 TEAMPTS^ORQPTQ1(.Y,IEN)<br> I FROM="W" S IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT WARD",1,"Q") D:+$G(IEN)>0 BYWARD^ORWPT(.Y,IEN)<br> I FROM="P" S IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT PROVIDER",1,"Q") D:+$G(IEN)>0 PROVPTS^ORQPTQ2(.Y,IEN)<br> I FROM="S" S IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT SPECIALTY",1,"Q") D:+$G(IEN)>0 SPECPTS^ORQPTQ2(.Y,IEN)<br> I FROM="C" D<br> .S API="ORLP DEFAULT CLINIC "_$$UP^XLFSTR($$DOW^XLFDT(DT)),IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),API,1,"Q") I +$G(IEN)>0 D<br> ..S BEG=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC START DATE",1,"E"))<br> ..I BEG="T+0" S BEG=$$FMTE^XLFDT(DT,BEG)<br> ..S END=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC STOP DATE",1,"E"))<br> ..I END="T+0" S END=$$FMTE^XLFDT(DT,END)<br> ..D CLINPTS2^ORQPTQ2(.Y,+$G(IEN),BEG,END)<br> I FROM="M" D<br> .S IEN=$D(^OR(100.24,DUZ,0)) I +$G(IEN)>0 S IEN=DUZ D<br> ..S BEG=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC START DATE",1,"E"))<br> ..I BEG="T+0" S BEG=$$FMTE^XLFDT(DT,BEG)<br> ..S END=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC STOP DATE",1,"E"))<br> ..I END="T+0" S END=$$FMTE^XLFDT(DT,END)<br> ..D COMBPTS^ORQPTQ6(0,+$G(IEN),BEG,END) ; "0"= GUI RPC call.<br> I ($$BROKER^XWBLIB)&(FROM'="M") D  ; Combinations already written to global.<br> .S ORQDAT="",ORQCNT=0<br> .F  S ORQCNT=$O(Y(ORQCNT)) Q:ORQCNT=""  S ORQDAT=Y(ORQCNT) D<br> ..S ^TMP("OR",$J,"PATIENTS",ORQCNT,0)=ORQDAT<br> I ('$$BROKER^XWBLIB) S Y=FROM_";"_+$G(IEN)_";"_$G(BEG)_";"_$G(END) ; MKB 10/13/95{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}