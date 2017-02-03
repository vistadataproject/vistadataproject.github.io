---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 DOSES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 DOSES{:/}
 tag | {::nomarkdown}DOSES{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return doses for an orderable item.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DOSES^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return doses for an orderable item  -  TEST ONLY
 Input parameters | {::nomarkdown}OI{:/}
 Code | {::nomarkdown}  N ORTMP,ORI,ORJ,ILST,LTSA,NDF,ORWDRG,VAPN,X,PSTYPE S PSTYPE="O"<br> D ENDD^PSJORUTL("^^^"_+$P($G(^ORD(101.43,OI,0)),"^",2),PSTYPE,.ORTMP)<br> S ORI=0 F  S ORI=$O(ORTMP(ORI)) Q:'ORI  S ORWDRG=+ORTMP(ORI) D<br> . K ^TMP($J,"ORWDPS32 DRUG")<br> . D NDF^PSS50(+ORWDRG,,,,,"ORWDPS32 DRUG")<br> . S VAPN=$P($G(^TMP($J,"ORWDPS32 DRUG",+ORWDRG,22)),U),NDF=$P($G(^TMP($J,"ORWDPS32 DRUG",+ORWDRG,20)),U)<br> . S X=$$DFSU^PSNAPIS(NDF,VAPN)<br> . S LSTA($P(X,U,4),$P(X,U,6))=""<br> . I +$P(X,U,4)=$P(X,U,4) S LSTA($P(X,U,4)*2,$P(X,U,6))=""<br> K ^TMP($J,"ORWDPS32 DRUG")<br> S ORI="",ILST=0 F  S ORI=$O(LSTA(ORI)) Q:ORI=""  D<br> . S ORJ="" F  S ORJ=$O(LSTA(ORI,ORJ)) Q:ORJ=""  D<br> . . S ILST=ILST+1,LST(ILST)=ORI_" "_ORJ{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}