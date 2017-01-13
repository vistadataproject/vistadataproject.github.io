---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU SET ADMINISTRATIVE CLOSURE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU SET ADMINISTRATIVE CLOSURE{:/}
 tag | {::nomarkdown}ADMNCLOS{:/}
 routine | [TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure sets the file attributes necessary to close adocument by administrative action (either manually or by scanning a paperdocument that doesn't require the signature of an author as a typical TIUDocument would).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Post Administrative Closure Information
 Input Parameters | {::nomarkdown}TIUDA<br/>MODE<br/>PERSON{:/}
 Lines | ```
 N TIUX,TIUI,TIUCLBY,TIUCLTTL,TIUCAPT
 I '$D(^TIU(8925,TIUDA)) S TIUY="0^Attempt to file data in a Nonexistent Entry." Q
 S MODE=$G(MODE,"S")
 S TIUCAPT=$S("ES"[MODE:"  Electronically Filed: ",1:"Administrative Closure: ")
 S PERSON=$G(PERSON,DUZ)
 S TIUCLBY=$$SIGNAME^TIULS(PERSON)
 S TIUCLTTL=$$SIGTITL^TIULS(PERSON)
 S TIUX(.05)=7
 S TIUX(1606)=$G(DT)
 S TIUX(1607)=TIUCLBY
 S TIUX(1608)=TIUCLTTL
 S TIUX(1613)=MODE
 D FILE^TIUSRVP(.TIUY,TIUDA,.TIUX)
 S TIUI=$P($G(^TIU(8925,TIUDA,"TEXT",0)),U,3)+1
 I MODE="S" D
 . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)=" ",TIUI=TIUI+1
 . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)="                           *** SCANNED DOCUMENT ***",TIUI=TIUI+1
 . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)="                            SIGNATURE NOT REQUIRED",TIUI=TIUI+1
 . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)=" ",TIUI=TIUI+1
 S ^TIU(8925,TIUDA,"TEXT",TIUI,0)=" ",TIUI=TIUI+1
 S ^TIU(8925,TIUDA,"TEXT",TIUI,0)=TIUCAPT_$$DATE^TIULS(DT,"MM/DD/CCYY"),TIUI=TIUI+1
 S ^TIU(8925,TIUDA,"TEXT",TIUI,0)="                    by: "_TIUCLBY,TIUI=TIUI+1
 S ^TIU(8925,TIUDA,"TEXT",TIUI,0)="                        "_TIUCLTTL
 S ^TIU(8925,+TIUDA,"TEXT",0)="^^"_TIUI_U_TIUI_U_DT_"^^"
 D ALERTDEL^TIUALRT(TIUDA)
 N TIUCONS,TIUSTIS,TIUTTL,TIUPSIG,DA S TIUCONS=-1
 D ISCNSLT^TIUCNSLT(.TIUCONS,+$G(^TIU(8925,TIUDA,0)))
 S TIUSTIS=$P($G(^TIU(8925,TIUDA,0)),U,5)
 S TIUTTL=+$G(^TIU(8925,+TIUDA,0)),TIUPSIG=$$POSTSIGN^TIULC1(TIUTTL)
 I +$L(TIUPSIG) S DA=TIUDA X TIUPSIG
 I TIUCONS,TIUSTIS=7,$$HASKIDS^TIUSRVLI(TIUDA) D
 . N SEQUENCE,TIUKIDS,TIUINT,TIUK
 . S SEQUENCE="D",TIUKIDS="TIUKIDS",TIUINT=0,TIUK=0
 . D SETKIDS^TIUSRVLI(TIUKIDS,TIUDA,TIUINT)
 . F  S TIUK=$O(TIUKIDS(TIUK)) Q:'TIUK  D
 . . I $P(TIUKIDS(TIUK),U,7)="completed" X TIUPSIG```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the document in the TIU DOCUMENT FILE (#8925).{:/} | 
| {::nomarkdown}MODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the alphabetic code for the manner in which the document wasclosed (i.e., \S\ for Scanned Document, or \M\ for Manual Closure). Optional: Defaults to \S\.{:/} | 
| {::nomarkdown}PERSON{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN in the NEW PERSON file (#200) of the person who closed thedocument. Optional: Defaults to DUZ (i.e., the current user).{:/} | 




 Generated on January 13th 2017, 6:55:29 am