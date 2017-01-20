---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return list of surgery cases for a patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}patient id{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}BEGIN DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}CONTEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Not yet implemented.  Reserved for future use.{:/} | 
| {::nomarkdown}MAX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LIST^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | RETURN LIST OF SURGERY CASES FOR A PATIENT
 Input parameters | {::nomarkdown}ORDFN<br>ORBDT<br>OREDT<br>ORCTXT<br>ORMAX<br>ORFHIE{:/}
 Code | {::nomarkdown}  Q:'$$PATCH^XPDUTL("SR*3.0*100")<br> N I,J,X,SHOWADD,SHOWDOCS<br> S ORY=$NA(^TMP("ORLIST",$J))<br> Q:'+ORDFN<br> S:'$G(ORCTXT) ORCTXT=1<br> S:'$G(ORBDT) ORBDT=""<br> S:'$G(OREDT) OREDT=""<br> S:'$G(ORMAX) ORMAX=""<br> S (SHOWDOCS,SHOWADD)=1<br> D LIST^SROESTV(.ORY,ORDFN,ORBDT,OREDT,ORMAX,SHOWDOCS)<br> S I=0<br> F  S I=$O(@ORY@(I)) Q:+I=0  D<br> . S X=@ORY@(I),J=0<br> . S $P(X,U,6)=$$NON^SROESTV(+X)<br> . S $P(X,U,14)=ORCTXT<br> . S $P(X,U,13)=$P(X,U,5),$P(X,U,5)=""<br> . S @ORY@(I)=X<br> . F  S J=$O(@ORY@(I,J)) Q:+J=0  D<br> . . S X=@ORY@(I,J)<br> . . S:(($P(X,U,14)=ORCTXT)!($P(X,U,14)="")) $P(X,U,14)=+$P(X,U,10)<br> . . S @ORY@(I,J)=X{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}