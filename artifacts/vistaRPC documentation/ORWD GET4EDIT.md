---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWD GET4EDIT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWD GET4EDIT{:/}
 tag | {::nomarkdown}GET4EDIT{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the responses for an already existing order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GET4EDIT^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}return responses in format that can be used by dialog{:/}
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | ```  N ILST,PRMT,INST,DLG,ORDIALOG S ILST=0
 I '$D(ORIFN) S LST=0 Q
 S ORIFN=+ORIFN,DLG=+$P(^OR(100,ORIFN,0),U,5)
 D GETDLG1^ORCD(DLG),GETORDER^ORCD("^OR(100,"_ORIFN_",4.5)")
 S PRMT=0 F  S PRMT=$O(ORDIALOG(PRMT)) Q:'PRMT  D
 . S INST=0 F  S INST=$O(ORDIALOG(PRMT,INST)) Q:'INST  D
 . . S ILST=ILST+1,LST(ILST)="~"_PRMT_U_INST_U_$P(ORDIALOG(PRMT),U,3)
 . . S ILST=ILST+1,LST(ILST)="d"_ORDIALOG(PRMT,INST)
 . . I $E(ORDIALOG(PRMT,INST))=U D                 ; load word processing
 . . . N I,REF S I=0,REF=ORDIALOG(PRMT,INST)
 . . . F  S I=$O(@REF@(I)) Q:'I  S ILST=ILST+1,LST(ILST)="t"_^(I,0)
 . . E  S $P(LST(ILST),U,2)=$$EXT^ORCD(PRMT,INST)  ; load external value
 . . I "R"[$E(ORDIALOG(PRMT,0)) D
 . . . S $P(LST(ILST),U,2)=$$UP^XLFSTR($$FMTE^XLFDT(ORDIALOG(PRMT,INST)))```




 Generated on January 14th 2017, 7:26:35 am