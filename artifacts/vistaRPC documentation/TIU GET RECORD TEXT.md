---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET RECORD TEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET RECORD TEXT{:/}
 tag | {::nomarkdown}TGET{:/}
 routine | [TIUSRVR1](http://code.osehra.org/dox/Routine_TIUSRVR1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will get the textual portion of a TIU Document Record.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Build ^TMP("TIUVIEW",$J,
 Input Parameters | {::nomarkdown}TIUDA<br/>ACTION{:/}
 Lines | ```
 N TIUL,TIUREC,TIUARR,TIUGDATA,TIUNAME,TIUPRM0,TIUPRM1,X,Y,TIUCPF,ONBROWSE
 K ^TMP("TIUVIEW",$J),^TMP("TIU FOCUS",$J)
 S ACTION=$G(ACTION,"VIEW"),TIUL=0
 D SETPARM^TIULE
 S TIUY=$NA(^TMP("TIUVIEW",$J))
 I '$D(^TIU(8925,+$G(TIUDA),0)) S VALMQUIT=1 Q
 S TIUGDATA=$$SETGDATA(TIUDA)
 S TIUARR="^TMP(""TIUVIEW"",$J)"
  ; Initialize ^TMP("TIU FOCUS",$J) to the entry that has focus
 S ^TMP("TIU FOCUS",$J)=TIUDA
 S ONBROWSE=$$ONBROWSE^TIULC1(+$G(^TIU(8925,+TIUDA,0)))
 I $L(ONBROWSE) D LOADSUPP(ONBROWSE,TIUDA,.TIUL)
 S TIUCPF=+$$ISA^TIULX(+$G(^TIU(8925,TIUDA,0)),+$$CLASS^TIUCP)
 D INQUIRE^TIUSRVR2(TIUDA,.TIUREC,TIUCPF)
 D LOADTOP(.TIUREC,TIUDA,.TIUL,TIUGDATA,TIUCPF)
 D LOADREC^TIUSRVR2(TIUDA,.TIUL,TIUGDATA,0,ACTION)
 I +$$MEMBEROF^TIUPR222(+$G(^TIU(8925,+TIUDA,0)),"FORM LETTERS") D
 . S TIUL=TIUL+1,@TIUARR@(TIUL)="" D GUIVIEW^TIUFLP1(TIUDA,"CLS",.TIUL,.TIUARR)
 . S TIUL=TIUL+1,@TIUARR@(TIUL)="" D GUIVIEW^TIUFLP1(TIUDA,"FTR",.TIUL,.TIUARR)
 K ^TMP("TIU FOCUS",$J)
 S VALMCNT=+$G(TIUL)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:28 am