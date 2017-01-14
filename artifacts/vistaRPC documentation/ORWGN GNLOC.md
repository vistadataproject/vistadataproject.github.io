---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWGN GNLOC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWGN GNLOC{:/}
 tag | {::nomarkdown}GNLOC{:/}
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GNLOC^[ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 Method comment | Is valid GN location? 1: true 0: false
 First comment | {::nomarkdown}.ORY=returned list, ORFROM=text to $O from, DIR=$O direction.{:/}
 Input parameters | {::nomarkdown}ORFROM<br/>DIR{:/}
 Code | ```  N IX,ORLST,CHKVAL,ORERR,ORX
 K ^TMP("ORGN",$J)
 S (ORLST,ORERR)="",CHKVAL=0
 D GETLST^XPAR(.ORLST,"ALL","OR GN LOCATIONS","N",.ORERR)
 I ORERR S ORY=ORERR Q
 Q:$D(ORLST)=1
 S IX=0 F  S IX=$O(ORLST(IX)) Q:'IX  D
 . S CHKVAL=ORLST(IX)
 . S:($$ACTLOC^ORWU(+CHKVAL)) ^TMP("ORGN",$J,$P(CHKVAL,U,2))=ORLST(IX)
 N I,CNT S I=0,CNT=44,ORY=""
 Q:$D(^TMP("ORGN",$J))<10
 F  Q:I'<CNT  S ORFROM=$O(^TMP("ORGN",$J,ORFROM),DIR) Q:ORFROM=""  D
 . S I=I+1,ORY(I)=^TMP("ORGN",$J,ORFROM)```




 Generated on January 14th 2017, 7:26:36 am