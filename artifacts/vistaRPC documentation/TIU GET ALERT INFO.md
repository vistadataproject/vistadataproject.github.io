---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET ALERT INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET ALERT INFO{:/}
 tag | {::nomarkdown}GETALRT{:/}
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a TIU XQAID, return the patient and document type for the item beingalerted.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The XQAID of the alert.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETALRT^[TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 Method comment | Retrieve DFN and document type for a TIU alert
 Input parameters | {::nomarkdown}XQAID{:/}
 Code | {::nomarkdown}  N X,TIUDA,TIUDFN,ORTAB,TIUDAD,GMRCO<br> S TIUDA=$TR($P(XQAID,";",1),"ABCDEFGHIJKLMNOPQRSTUVWXYZ") ; Strip Text<br> I '+TIUDA!('$D(^TIU(8925,+TIUDA,0))) S TIUY="-1" Q<br> S X=$P($G(^TIU(8925,TIUDA,0)),U)<br> S TIUDFN=$P(^TIU(8925,TIUDA,0),U,2)<br> I $P(^TIU(8925,TIUDA,0),U,6)'="" D<br> . S TIUDAD=$P(^TIU(8925,TIUDA,0),U,6)<br> . S X=$P($G(^TIU(8925,TIUDAD,0)),U)<br> I ('+X)!('+TIUDFN) S TIUY="-1" Q<br> S ORTAB=903    ;DEFAULT TO PN<br> I +$$ISDS^TIULX(X) S ORTAB=901<br> I +$$ISA^TIULX(X,$$CLASS^TIUSROI("SURGICAL REPORTS")) S ORTAB=904<br> I +$$ISA^TIULX(X,$$CLASS^TIUCNSLT)!(+$$ISA^TIULX(X,+$$CLASS^TIUCP)) D<br> . S GMRCO=$P(^TIU(8925,$S(+$G(TIUDAD):TIUDAD,1:TIUDA),14),U,5)<br> . S ORTAB=902_";"_GMRCO<br> S TIUY=TIUDA_U_TIUDFN_U_ORTAB{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}