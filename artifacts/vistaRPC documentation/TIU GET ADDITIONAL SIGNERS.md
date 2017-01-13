---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET ADDITIONAL SIGNERS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET ADDITIONAL SIGNERS{:/}
 tag | {::nomarkdown}GETSIGNR{:/}
 routine | [TIULX](http://code.osehra.org/dox/Routine_TIULX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the list of additional signers currently identified for a givenTIU document.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC to Get list of extra signers for a document
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 N TIUI,DA,DR,DIC,DIQ,TIUXTRA,TIUD12,TIUAU,TIUEC S (DA,TIUI)=0
 S DIC="^TIU(8925.7,",DIQ="TIUXTRA"
 F  S DA=$O(^TIU(8925.7,"B",TIUDA,DA)) Q:+DA'>0  D
 . N TIUX,TIUSGNR
 . S DR=".03;.04",DIQ(0)="IE" D EN^DIQ1 Q:+$D(TIUXTRA)'>9
 . I +$G(TIUXTRA(8925.7,DA,.04,"I")) Q
 . S TIUI=+$G(TIUI)+1
 . S TIUY(TIUI)=$G(TIUXTRA(8925.7,DA,.03,"I"))_U_$G(TIUXTRA(8925.7,DA,.03,"E"))
 S TIUD12=$G(^TIU(8925,TIUDA,12))
 S TIUAU=$P(TIUD12,U,4),TIUEC=$P(TIUD12,U,8)
 S TIUI=+$G(TIUI)+1,TIUY(TIUI)=TIUAU_U_$$PERSNAME^TIULC1(TIUAU)_U_"AUTHOR"
 I +TIUEC'>0 Q
 I '$$FIND1^DIC(200,"","","`"_+TIUEC) D CLEAN^DILF Q
 S TIUI=+$G(TIUI)+1,TIUY(TIUI)=TIUEC_U_$$PERSNAME^TIULC1(TIUEC)_U_"EXPECTED COSIGNER"```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record # of the TIU Document in file 8925.{:/} | 




 Generated on January 13th 2017, 6:55:28 am