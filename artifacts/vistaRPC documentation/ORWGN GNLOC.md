---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGN GNLOC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGN GNLOC{:/}
 tag | {::nomarkdown}GNLOC{:/}
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is valid GN location? 1: true 0: false
 Input Parameters | {::nomarkdown}ORFROM<br/>DIR{:/}
 Lines | ```{::nomarkdown} N IX,ORLST,CHKVAL,ORERR,ORX<br/> K ^TMP("ORGN",$J)<br/> S (ORLST,ORERR)="",CHKVAL=0<br/> D GETLST^XPAR(.ORLST,"ALL","OR GN LOCATIONS","N",.ORERR)<br/> I ORERR S ORY=ORERR Q<br/> Q:$D(ORLST)=1<br/> S IX=0 F  S IX=$O(ORLST(IX)) Q:'IX  D<br/> . S CHKVAL=ORLST(IX)<br/> . S:($$ACTLOC^ORWU(+CHKVAL)) ^TMP("ORGN",$J,$P(CHKVAL,U,2))=ORLST(IX)<br/> N I,CNT S I=0,CNT=44,ORY=""<br/> Q:$D(^TMP("ORGN",$J))<10<br/> F  Q:I'<CNT  S ORFROM=$O(^TMP("ORGN",$J,ORFROM),DIR) Q:ORFROM=""  D<br/> . S I=I+1,ORY(I)=^TMP("ORGN",$J,ORFROM)```{:/}
 Leading comment lines | {::nomarkdown}.ORY=returned list, ORFROM=text to $O from, DIR=$O direction.{:/}




 Generated on January 13th 2017, 7:11:27 am