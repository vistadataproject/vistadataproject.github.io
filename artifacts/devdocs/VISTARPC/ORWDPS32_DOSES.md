---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 DOSES<br/>
# ORWDPS32 DOSES

Return doses for an orderable item.

## Properties

Property | Value
--- | ---
Label | DOSES
MUMPS Implementation | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DOSES^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Method Comment | return doses for an orderable item  -  TEST ONLY
Input Parameters | OI
Code | {::nomarkdown}<pre><code> N ORTMP,ORI,ORJ,ILST,LTSA,NDF,ORWDRG,VAPN,X,PSTYPE S PSTYPE="O"<br/> D ENDD^PSJORUTL("^^^"_+$P($G(^ORD(101.43,OI,0)),"^",2),PSTYPE,.ORTMP)<br/> S ORI=0 F  S ORI=$O(ORTMP(ORI)) Q:'ORI  S ORWDRG=+ORTMP(ORI) D<br/> . K ^TMP($J,"ORWDPS32 DRUG")<br/> . D NDF^PSS50(+ORWDRG,,,,,"ORWDPS32 DRUG")<br/> . S VAPN=$P($G(^TMP($J,"ORWDPS32 DRUG",+ORWDRG,22)),U),NDF=$P($G(^TMP($J,"ORWDPS32 DRUG",+ORWDRG,20)),U)<br/> . S X=$$DFSU^PSNAPIS(NDF,VAPN)<br/> . S LSTA($P(X,U,4),$P(X,U,6))=""<br/> . I +$P(X,U,4)=$P(X,U,4) S LSTA($P(X,U,4)*2,$P(X,U,6))=""<br/> K ^TMP($J,"ORWDPS32 DRUG")<br/> S ORI="",ILST=0 F  S ORI=$O(LSTA(ORI)) Q:ORI=""  D<br/> . S ORJ="" F  S ORJ=$O(LSTA(ORI,ORJ)) Q:ORJ=""  D<br/> . . S ILST=ILST+1,LST(ILST)=ORI_" "_ORJ</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}