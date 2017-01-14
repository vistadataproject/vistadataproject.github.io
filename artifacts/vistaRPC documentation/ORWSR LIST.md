---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWSR LIST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return list of surgery cases for a patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}patient id{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}BEGIN DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}CONTEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Not yet implemented.  Reserved for future use.{:/} | 
| {::nomarkdown}MAX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LIST^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | RETURN LIST OF SURGERY CASES FOR A PATIENT
 Input parameters | {::nomarkdown}ORDFN<br/>ORBDT<br/>OREDT<br/>ORCTXT<br/>ORMAX<br/>ORFHIE{:/}
 Code | ```  Q:'$$PATCH^XPDUTL("SR*3.0*100")
 N I,J,X,SHOWADD,SHOWDOCS
 S ORY=$NA(^TMP("ORLIST",$J))
 Q:'+ORDFN
 S:'$G(ORCTXT) ORCTXT=1
 S:'$G(ORBDT) ORBDT=""
 S:'$G(OREDT) OREDT=""
 S:'$G(ORMAX) ORMAX=""
 S (SHOWDOCS,SHOWADD)=1
 D LIST^SROESTV(.ORY,ORDFN,ORBDT,OREDT,ORMAX,SHOWDOCS)
 S I=0
 F  S I=$O(@ORY@(I)) Q:+I=0  D
 . S X=@ORY@(I),J=0
 . S $P(X,U,6)=$$NON^SROESTV(+X)
 . S $P(X,U,14)=ORCTXT
 . S $P(X,U,13)=$P(X,U,5),$P(X,U,5)=""
 . S @ORY@(I)=X
 . F  S J=$O(@ORY@(I,J)) Q:+J=0  D
 . . S X=@ORY@(I,J)
 . . S:(($P(X,U,14)=ORCTXT)!($P(X,U,14)="")) $P(X,U,14)=+$P(X,U,10)
 . . S @ORY@(I,J)=X```




 Generated on January 14th 2017, 7:26:35 am