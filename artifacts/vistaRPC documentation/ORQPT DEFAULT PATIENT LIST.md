---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT DEFAULT PATIENT LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT DEFAULT PATIENT LIST{:/}
 tag | {::nomarkdown}DEFLIST{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Function returns the current user's default patient list.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return current user's default patient list
 Lines | ```
 I $$BROKER^XWBLIB S Y=$NA(^TMP("OR",$J,"PATIENTS")) ; GUI = global.
 I '$$BROKER^XWBLIB S ^TMP("OR",$J,"PATIENTS",0)=""
 Q:'$D(DUZ)
 N FROM,IEN,BEG,END,API,ORSRV,ORQDAT,ORQCNT,ORGUI
 S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U) ; Get S/S.
 S FROM=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT LIST SOURCE",1,"Q")
 Q:'$L($G(FROM))
 I FROM="T" S IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT TEAM",1,"Q") D:+$G(IEN)>0 TEAMPTS^ORQPTQ1(.Y,IEN)
 I FROM="W" S IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT WARD",1,"Q") D:+$G(IEN)>0 BYWARD^ORWPT(.Y,IEN)
 I FROM="P" S IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT PROVIDER",1,"Q") D:+$G(IEN)>0 PROVPTS^ORQPTQ2(.Y,IEN)
 I FROM="S" S IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),"ORLP DEFAULT SPECIALTY",1,"Q") D:+$G(IEN)>0 SPECPTS^ORQPTQ2(.Y,IEN)
 I FROM="C" D
 .S API="ORLP DEFAULT CLINIC "_$$UP^XLFSTR($$DOW^XLFDT(DT)),IEN=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV),API,1,"Q") I +$G(IEN)>0 D
 ..S BEG=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC START DATE",1,"E"))
 ..I BEG="T+0" S BEG=$$FMTE^XLFDT(DT,BEG)
 ..S END=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC STOP DATE",1,"E"))
 ..I END="T+0" S END=$$FMTE^XLFDT(DT,END)
 ..D CLINPTS2^ORQPTQ2(.Y,+$G(IEN),BEG,END)
 I FROM="M" D
 .S IEN=$D(^OR(100.24,DUZ,0)) I +$G(IEN)>0 S IEN=DUZ D
 ..S BEG=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC START DATE",1,"E"))
 ..I BEG="T+0" S BEG=$$FMTE^XLFDT(DT,BEG)
 ..S END=$$UP^XLFSTR($$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORLP DEFAULT CLINIC STOP DATE",1,"E"))
 ..I END="T+0" S END=$$FMTE^XLFDT(DT,END)
 ..D COMBPTS^ORQPTQ6(0,+$G(IEN),BEG,END) ; "0"= GUI RPC call.
 I ($$BROKER^XWBLIB)&(FROM'="M") D  ; Combinations already written to global.
 .S ORQDAT="",ORQCNT=0
 .F  S ORQCNT=$O(Y(ORQCNT)) Q:ORQCNT=""  S ORQDAT=Y(ORQCNT) D
 ..S ^TMP("OR",$J,"PATIENTS",ORQCNT,0)=ORQDAT
 I ('$$BROKER^XWBLIB) S Y=FROM_";"_+$G(IEN)_";"_$G(BEG)_";"_$G(END) ; MKB 10/13/95```




 Generated on January 13th 2017, 6:55:28 am