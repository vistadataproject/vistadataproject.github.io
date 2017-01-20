---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET ADDITIONAL SIGNERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET ADDITIONAL SIGNERS{:/}
 tag | {::nomarkdown}GETSIGNR{:/}
 routine | [TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the list of additional signers currently identified for a givenTIU document.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record # of the TIU Document in file 8925.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETSIGNR^[TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
 Method comment | RPC to Get list of extra signers for a document
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N TIUI,DA,DR,DIC,DIQ,TIUXTRA,TIUD12,TIUAU,TIUEC S (DA,TIUI)=0<br> S DIC="^TIU(8925.7,",DIQ="TIUXTRA"<br> F  S DA=$O(^TIU(8925.7,"B",TIUDA,DA)) Q:+DA'>0  D<br> . N TIUX,TIUSGNR<br> . S DR=".03;.04",DIQ(0)="IE" D EN^DIQ1 Q:+$D(TIUXTRA)'>9<br> . I +$G(TIUXTRA(8925.7,DA,.04,"I")) Q<br> . S TIUI=+$G(TIUI)+1<br> . S TIUY(TIUI)=$G(TIUXTRA(8925.7,DA,.03,"I"))_U_$G(TIUXTRA(8925.7,DA,.03,"E"))<br> S TIUD12=$G(^TIU(8925,TIUDA,12))<br> S TIUAU=$P(TIUD12,U,4),TIUEC=$P(TIUD12,U,8)<br> S TIUI=+$G(TIUI)+1,TIUY(TIUI)=TIUAU_U_$$PERSNAME^TIULC1(TIUAU)_U_"AUTHOR"<br> I +TIUEC'>0 Q<br> I '$$FIND1^DIC(200,"","","`"_+TIUEC) D CLEAN^DILF Q<br> S TIUI=+$G(TIUI)+1,TIUY(TIUI)=TIUEC_U_$$PERSNAME^TIULC1(TIUEC)_U_"EXPECTED COSIGNER"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}