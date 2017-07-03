---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWGN GNLOC
# ORWGN GNLOC



Property | Value
--- | ---
Label | GNLOC
Routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [GNLOC^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Method Comment | Is valid GN location? 1: true 0: false
Input Parameters | ORFROM, DIR
First Comment | {::nomarkdown}<pre><code> .ORY=returned list, ORFROM=text to $O from, DIR=$O direction.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N IX,ORLST,CHKVAL,ORERR,ORX<br/> K ^TMP("ORGN",$J)<br/> S (ORLST,ORERR)="",CHKVAL=0<br/> D GETLST^XPAR(.ORLST,"ALL","OR GN LOCATIONS","N",.ORERR)<br/> I ORERR S ORY=ORERR Q<br/> Q:$D(ORLST)=1<br/> S IX=0 F  S IX=$O(ORLST(IX)) Q:'IX  D<br/> . S CHKVAL=ORLST(IX)<br/> . S:($$ACTLOC^ORWU(+CHKVAL)) ^TMP("ORGN",$J,$P(CHKVAL,U,2))=ORLST(IX)<br/> N I,CNT S I=0,CNT=44,ORY=""<br/> Q:$D(^TMP("ORGN",$J))<10<br/> F  Q:I'<CNT  S ORFROM=$O(^TMP("ORGN",$J,ORFROM),DIR) Q:ORFROM=""  D<br/> . S I=I+1,ORY(I)=^TMP("ORGN",$J,ORFROM)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}