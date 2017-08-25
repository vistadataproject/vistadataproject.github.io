---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU SET ADMINISTRATIVE CLOSURE<br/>
# TIU SET ADMINISTRATIVE CLOSURE

This remote procedure sets the file attributes necessary to close adocument by administrative action (either manually or by scanning a paperdocument that doesn't require the signature of an author as a typical TIUDocument would).

## Properties

Property | Value
--- | ---
Label | ADMNCLOS
MUMPS Implementation | [TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the IEN of the document in the TIU DOCUMENT FILE (#8925).
MODE | LITERAL |  | true | This is the alphabetic code for the manner in which the document wasclosed (i.e., &quot;S&quot; for Scanned Document, or &quot;M&quot; for Manual Closure). Optional: Defaults to &quot;S&quot;.
PERSON | LITERAL |  | true | This is the IEN in the NEW PERSON file (#200) of the person who closed thedocument. Optional: Defaults to DUZ (i.e., the current user).



## MUMPS Method Description

Property | Value
--- | ---
Method | [ADMNCLOS^TIUSRVPT](http://code.osehra.org/dox/Routine_TIUSRVPT_source.html)
Method Comment | Post Administrative Closure Information
Input Parameters | TIUDA, MODE, PERSON
Code | {::nomarkdown}<pre><code> N TIUX,TIUI,TIUCLBY,TIUCLTTL,TIUCAPT<br/> I '$D(^TIU(8925,TIUDA)) S TIUY="0^Attempt to file data in a Nonexistent Entry." Q<br/> S MODE=$G(MODE,"S")<br/> S TIUCAPT=$S("ES"[MODE:"  Electronically Filed: ",1:"Administrative Closure: ")<br/> S PERSON=$G(PERSON,DUZ)<br/> S TIUCLBY=$$SIGNAME^TIULS(PERSON)<br/> S TIUCLTTL=$$SIGTITL^TIULS(PERSON)<br/> S TIUX(.05)=7<br/> S TIUX(1606)=$G(DT)<br/> S TIUX(1607)=TIUCLBY<br/> S TIUX(1608)=TIUCLTTL<br/> S TIUX(1613)=MODE<br/> D FILE^TIUSRVP(.TIUY,TIUDA,.TIUX)<br/> S TIUI=$P($G(^TIU(8925,TIUDA,"TEXT",0)),U,3)+1<br/> I MODE="S" D<br/> . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)=" ",TIUI=TIUI+1<br/> . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)="                           *** SCANNED DOCUMENT ***",TIUI=TIUI+1<br/> . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)="                            SIGNATURE NOT REQUIRED",TIUI=TIUI+1<br/> . S ^TIU(8925,+TIUDA,"TEXT",TIUI,0)=" ",TIUI=TIUI+1<br/> S ^TIU(8925,TIUDA,"TEXT",TIUI,0)=" ",TIUI=TIUI+1<br/> S ^TIU(8925,TIUDA,"TEXT",TIUI,0)=TIUCAPT_$$DATE^TIULS(DT,"MM/DD/CCYY"),TIUI=TIUI+1<br/> S ^TIU(8925,TIUDA,"TEXT",TIUI,0)="                    by: "_TIUCLBY,TIUI=TIUI+1<br/> S ^TIU(8925,TIUDA,"TEXT",TIUI,0)="                        "_TIUCLTTL<br/> S ^TIU(8925,+TIUDA,"TEXT",0)="^^"_TIUI_U_TIUI_U_DT_"^^"<br/> D ALERTDEL^TIUALRT(TIUDA)<br/> N TIUCONS,TIUSTIS,TIUTTL,TIUPSIG,DA S TIUCONS=-1<br/> D ISCNSLT^TIUCNSLT(.TIUCONS,+$G(^TIU(8925,TIUDA,0)))<br/> S TIUSTIS=$P($G(^TIU(8925,TIUDA,0)),U,5)<br/> S TIUTTL=+$G(^TIU(8925,+TIUDA,0)),TIUPSIG=$$POSTSIGN^TIULC1(TIUTTL)<br/> I +$L(TIUPSIG) S DA=TIUDA X TIUPSIG<br/> I TIUCONS,TIUSTIS=7,$$HASKIDS^TIUSRVLI(TIUDA) D<br/> . N SEQUENCE,TIUKIDS,TIUINT,TIUK<br/> . S SEQUENCE="D",TIUKIDS="TIUKIDS",TIUINT=0,TIUK=0<br/> . D SETKIDS^TIUSRVLI(TIUKIDS,TIUDA,TIUINT)<br/> . F  S TIUK=$O(TIUKIDS(TIUK)) Q:'TIUK  D<br/> . . I $P(TIUKIDS(TIUK),U,7)="completed" X TIUPSIG</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}