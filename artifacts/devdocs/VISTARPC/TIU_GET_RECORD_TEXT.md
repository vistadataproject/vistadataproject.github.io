---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU GET RECORD TEXT<br/>
# TIU GET RECORD TEXT

This RPC will get the textual portion of a TIU Document Record.

## Properties

Property | Value
--- | ---
Label | TGET
Routine | [TIUSRVR1](http://code.osehra.org/dox/Routine_TIUSRVR1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL | 10 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [TGET^TIUSRVR1](http://code.osehra.org/dox/Routine_TIUSRVR1_source.html)
Method Comment | Build ^TMP(&quot;TIUVIEW&quot;,$J,
Input Parameters | TIUDA, ACTION
Code | {::nomarkdown}<pre><code> N TIUL,TIUREC,TIUARR,TIUGDATA,TIUNAME,TIUPRM0,TIUPRM1,X,Y,TIUCPF,ONBROWSE<br/> K ^TMP("TIUVIEW",$J),^TMP("TIU FOCUS",$J)<br/> S ACTION=$G(ACTION,"VIEW"),TIUL=0<br/> D SETPARM^TIULE<br/> S TIUY=$NA(^TMP("TIUVIEW",$J))<br/> I '$D(^TIU(8925,+$G(TIUDA),0)) S VALMQUIT=1 Q<br/> S TIUGDATA=$$SETGDATA(TIUDA)<br/> S TIUARR="^TMP(""TIUVIEW"",$J)"<br/>  ; Initialize ^TMP("TIU FOCUS",$J) to the entry that has focus<br/> S ^TMP("TIU FOCUS",$J)=TIUDA<br/> S ONBROWSE=$$ONBROWSE^TIULC1(+$G(^TIU(8925,+TIUDA,0)))<br/> I $L(ONBROWSE) D LOADSUPP(ONBROWSE,TIUDA,.TIUL)<br/> S TIUCPF=+$$ISA^TIULX(+$G(^TIU(8925,TIUDA,0)),+$$CLASS^TIUCP)<br/> D INQUIRE^TIUSRVR2(TIUDA,.TIUREC,TIUCPF)<br/> D LOADTOP(.TIUREC,TIUDA,.TIUL,TIUGDATA,TIUCPF)<br/> D LOADREC^TIUSRVR2(TIUDA,.TIUL,TIUGDATA,0,ACTION)<br/> I +$$MEMBEROF^TIUPR222(+$G(^TIU(8925,+TIUDA,0)),"FORM LETTERS") D<br/> . S TIUL=TIUL+1,@TIUARR@(TIUL)="" D GUIVIEW^TIUFLP1(TIUDA,"CLS",.TIUL,.TIUARR)<br/> . S TIUL=TIUL+1,@TIUARR@(TIUL)="" D GUIVIEW^TIUFLP1(TIUDA,"FTR",.TIUL,.TIUARR)<br/> K ^TMP("TIU FOCUS",$J)<br/> S VALMCNT=+$G(TIUL)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fNotes.pas">fNotes.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}