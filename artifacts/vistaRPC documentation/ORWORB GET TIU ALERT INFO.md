---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWORB GET TIU ALERT INFO 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB GET TIU ALERT INFO{:/}
 tag | {::nomarkdown}GETALRT{:/}
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a TIU XQAID, return the patient and document type for the item beingalerted.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The XQAID of the alert.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETALRT^[TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 Method comment | Retrieve DFN and document type for a TIU alert
 Input parameters | {::nomarkdown}XQAID{:/}
 Code | ```  N X,TIUDA,TIUDFN,ORTAB,TIUDAD,GMRCO
 S TIUDA=$TR($P(XQAID,";",1),"ABCDEFGHIJKLMNOPQRSTUVWXYZ") ; Strip Text
 I '+TIUDA!('$D(^TIU(8925,+TIUDA,0))) S TIUY="-1" Q
 S X=$P($G(^TIU(8925,TIUDA,0)),U)
 S TIUDFN=$P(^TIU(8925,TIUDA,0),U,2)
 I $P(^TIU(8925,TIUDA,0),U,6)'="" D
 . S TIUDAD=$P(^TIU(8925,TIUDA,0),U,6)
 . S X=$P($G(^TIU(8925,TIUDAD,0)),U)
 I ('+X)!('+TIUDFN) S TIUY="-1" Q
 S ORTAB=903    ;DEFAULT TO PN
 I +$$ISDS^TIULX(X) S ORTAB=901
 I +$$ISA^TIULX(X,$$CLASS^TIUSROI("SURGICAL REPORTS")) S ORTAB=904
 I +$$ISA^TIULX(X,$$CLASS^TIUCNSLT)!(+$$ISA^TIULX(X,+$$CLASS^TIUCP)) D
 . S GMRCO=$P(^TIU(8925,$S(+$G(TIUDAD):TIUDAD,1:TIUDA),14),U,5)
 . S ORTAB=902_";"_GMRCO
 S TIUY=TIUDA_U_TIUDFN_U_ORTAB```




 Generated on January 14th 2017, 7:26:35 am