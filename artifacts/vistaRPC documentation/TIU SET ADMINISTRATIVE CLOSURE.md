---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU SET ADMINISTRATIVE CLOSURE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU SET ADMINISTRATIVE CLOSURE{:/}
 tag | {::nomarkdown}ADMNCLOS{:/}
 routine | [TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure sets the file attributes necessary to close adocument by administrative action (either manually or by scanning a paperdocument that doesn't require the signature of an author as a typical TIUDocument would).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the document in the TIU DOCUMENT FILE (#8925).{:/} | 
| {::nomarkdown}MODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the alphabetic code for the manner in which the document wasclosed (i.e., \S\ for Scanned Document, or \M\ for Manual Closure). Optional: Defaults to \S\.{:/} | 
| {::nomarkdown}PERSON{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN in the NEW PERSON file (#200) of the person who closed thedocument. Optional: Defaults to DUZ (i.e., the current user).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ADMNCLOS^[TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
 Method comment | Post Administrative Closure Information
 Input parameters | {::nomarkdown}TIUDA, MODE, PERSON{:/}
 Code | {::nomarkdown}  N TIUX,TIUI,TIUCLBY,TIUCLTTL,TIUCAPT<br> I '$D(^TIU(8925,TIUDA)) S TIUY="0^Attempt to file data in a Nonexistent Entry." Q<br> S MODE=$G(MODE,"S")<br> S TIUCAPT=$S("ES"[MODE:"  Electronically Filed: ",1:"Administrative Closure: ")<br> S PERSON=$G(PERSON,DUZ)<br> S TIUCLBY=$$SIGNAME^TIULS(PERSON)<br> S TIUCLTTL=$$SIGTITL^TIULS(PERSON)<br> S TIUX(.05)=7<br> S TIUX(1606)=$G(DT)<br> S TIUX(1607)=TIUCLBY<br> S TIUX(1608)=TIUCLTTL<br> S TIUX(1613)=MODE<br> D FILE^TIUSRVP(.TIUY,TIUDA,.TIUX)<br> S TIUI=$P($G(^TIU(8925,TIUDA,"TEXT",0)),U,3)+1<br> I MODE="S" D<br> . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)=" ",TIUI=TIUI+1<br> . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)="                           *** SCANNED DOCUMENT ***",TIUI=TIUI+1<br> . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)="                            SIGNATURE NOT REQUIRED",TIUI=TIUI+1<br> . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)=" ",TIUI=TIUI+1<br> S ^TIU(8925,TIUDA,"TEXT",TIUI,0)=" ",TIUI=TIUI+1<br> S ^TIU(8925,TIUDA,"TEXT",TIUI,0)=TIUCAPT_$$DATE^TIULS(DT,"MM/DD/CCYY"),TIUI=TIUI+1<br> S ^TIU(8925,TIUDA,"TEXT",TIUI,0)="                    by: "_TIUCLBY,TIUI=TIUI+1<br> S ^TIU(8925,TIUDA,"TEXT",TIUI,0)="                        "_TIUCLTTL<br> S ^TIU(8925,+TIUDA,"TEXT",0)="^^"_TIUI_U_TIUI_U_DT_"^^"<br> D ALERTDEL^TIUALRT(TIUDA)<br> N TIUCONS,TIUSTIS,TIUTTL,TIUPSIG,DA S TIUCONS=-1<br> D ISCNSLT^TIUCNSLT(.TIUCONS,+$G(^TIU(8925,TIUDA,0)))<br> S TIUSTIS=$P($G(^TIU(8925,TIUDA,0)),U,5)<br> S TIUTTL=+$G(^TIU(8925,+TIUDA,0)),TIUPSIG=$$POSTSIGN^TIULC1(TIUTTL)<br> I +$L(TIUPSIG) S DA=TIUDA X TIUPSIG<br> I TIUCONS,TIUSTIS=7,$$HASKIDS^TIUSRVLI(TIUDA) D<br> . N SEQUENCE,TIUKIDS,TIUINT,TIUK<br> . S SEQUENCE="D",TIUKIDS="TIUKIDS",TIUINT=0,TIUK=0<br> . D SETKIDS^TIUSRVLI(TIUKIDS,TIUDA,TIUINT)<br> . F  S TIUK=$O(TIUKIDS(TIUK)) Q:'TIUK  D<br> . . I $P(TIUKIDS(TIUK),U,7)="completed" X TIUPSIG{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}