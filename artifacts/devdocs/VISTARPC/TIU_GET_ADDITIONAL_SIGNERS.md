---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU GET ADDITIONAL SIGNERS
# TIU GET ADDITIONAL SIGNERS

Returns the list of additional signers currently identified for a givenTIU document.

Property | Value
--- | ---
Label | GETSIGNR
Routine | [TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record # of the TIU Document in file 8925.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETSIGNR^TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
Method Comment | RPC to Get list of extra signers for a document
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N TIUI,DA,DR,DIC,DIQ,TIUXTRA,TIUD12,TIUAU,TIUEC S (DA,TIUI)=0<br/> S DIC="^TIU(8925.7,",DIQ="TIUXTRA"<br/> F  S DA=$O(^TIU(8925.7,"B",TIUDA,DA)) Q:+DA'>0  D<br/> . N TIUX,TIUSGNR<br/> . S DR=".03;.04",DIQ(0)="IE" D EN^DIQ1 Q:+$D(TIUXTRA)'>9<br/> . I +$G(TIUXTRA(8925.7,DA,.04,"I")) Q<br/> . S TIUI=+$G(TIUI)+1<br/> . S TIUY(TIUI)=$G(TIUXTRA(8925.7,DA,.03,"I"))_U_$G(TIUXTRA(8925.7,DA,.03,"E"))<br/> S TIUD12=$G(^TIU(8925,TIUDA,12))<br/> S TIUAU=$P(TIUD12,U,4),TIUEC=$P(TIUD12,U,8)<br/> S TIUI=+$G(TIUI)+1,TIUY(TIUI)=TIUAU_U_$$PERSNAME^TIULC1(TIUAU)_U_"AUTHOR"<br/> I +TIUEC'>0 Q<br/> I '$$FIND1^DIC(200,"","","`"_+TIUEC) D CLEAN^DILF Q<br/> S TIUI=+$G(TIUI)+1,TIUY(TIUI)=TIUEC_U_$$PERSNAME^TIULC1(TIUEC)_U_"EXPECTED COSIGNER"</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}