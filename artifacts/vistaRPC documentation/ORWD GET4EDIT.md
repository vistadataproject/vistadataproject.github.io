---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD GET4EDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD GET4EDIT{:/}
 tag | {::nomarkdown}GET4EDIT{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the responses for an already existing order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}ORIFN{:/}
 Lines | {::nomarkdown} N ILST,PRMT,INST,DLG,ORDIALOG S ILST=0<br/> I '$D(ORIFN) S LST=0 Q<br/> S ORIFN=+ORIFN,DLG=+$P(^OR(100,ORIFN,0),U,5)<br/> D GETDLG1^ORCD(DLG),GETORDER^ORCD("^OR(100,"_ORIFN_",4.5)")<br/> S PRMT=0 F  S PRMT=$O(ORDIALOG(PRMT)) Q:'PRMT  D<br/> . S INST=0 F  S INST=$O(ORDIALOG(PRMT,INST)) Q:'INST  D<br/> . . S ILST=ILST+1,LST(ILST)="~"_PRMT_U_INST_U_$P(ORDIALOG(PRMT),U,3)<br/> . . S ILST=ILST+1,LST(ILST)="d"_ORDIALOG(PRMT,INST)<br/> . . I $E(ORDIALOG(PRMT,INST))=U D                 ; load word processing<br/> . . . N I,REF S I=0,REF=ORDIALOG(PRMT,INST)<br/> . . . F  S I=$O(@REF@(I)) Q:'I  S ILST=ILST+1,LST(ILST)="t"_^(I,0)<br/> . . E  S $P(LST(ILST),U,2)=$$EXT^ORCD(PRMT,INST)  ; load external value<br/> . . I "R"[$E(ORDIALOG(PRMT,0)) D<br/> . . . S $P(LST(ILST),U,2)=$$UP^XLFSTR($$FMTE^XLFDT(ORDIALOG(PRMT,INST))){:/}
 Leading comment lines | {::nomarkdown}return responses in format that can be used by dialog{:/}




 Generated on January 13th 2017, 7:15:27 am