---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGN GNLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGN GNLOC{:/}
 tag | {::nomarkdown}GNLOC{:/}
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GNLOC^[ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 Method comment | Is valid GN location? 1: true 0: false
 First comment | {::nomarkdown}<pre> .ORY=returned list, ORFROM=text to $O from, DIR=$O direction.</pre>{:/}
 Input parameters | {::nomarkdown}ORFROM<br>DIR{:/}
 Code | {::nomarkdown}  N IX,ORLST,CHKVAL,ORERR,ORX<br> K ^TMP("ORGN",$J)<br> S (ORLST,ORERR)="",CHKVAL=0<br> D GETLST^XPAR(.ORLST,"ALL","OR GN LOCATIONS","N",.ORERR)<br> I ORERR S ORY=ORERR Q<br> Q:$D(ORLST)=1<br> S IX=0 F  S IX=$O(ORLST(IX)) Q:'IX  D<br> . S CHKVAL=ORLST(IX)<br> . S:($$ACTLOC^ORWU(+CHKVAL)) ^TMP("ORGN",$J,$P(CHKVAL,U,2))=ORLST(IX)<br> N I,CNT S I=0,CNT=44,ORY=""<br> Q:$D(^TMP("ORGN",$J))<10<br> F  Q:I'<CNT  S ORFROM=$O(^TMP("ORGN",$J,ORFROM),DIR) Q:ORFROM=""  D<br> . S I=I+1,ORY(I)=^TMP("ORGN",$J,ORFROM){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [NOT OSEHRA CPRS]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}