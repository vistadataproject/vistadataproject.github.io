---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA1 RCVORCI 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 RCVORCI{:/}
 tag | {::nomarkdown}RCVORCI{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Receive Order Entry Billing Aware data from CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Receive order related Clinical Indicators & Diagnoses from GUI
 Input Parameters | {::nomarkdown}DIAG{:/}
 Lines | ```
 N DXIEN,ODN,ORIEN,SCI,OCDXCT,OCT
 S ODN="",OCDXCT=0,Y=""
 F  S ODN=$O(DIAG(ODN)) Q:ODN=""  D
 . S ORIEN=$P(DIAG(ODN),";",1)  ;Order IEN
 . I ORIEN'?1N.N S Y=0 Q
 . K ^OR(100,ORIEN,5.1) ;Clear currently stored diagnosis for rewrite
 . ; Data from Delphi format: ORIEN;11CNNNCNN^exDx1^exDx2^exDx3^exDx4
 . ; Convert 8 Tx Factors
 . S SCI=$$TFGUIGBL($RE($E($RE($P(DIAG(ODN),U)),1,8)))
 . S ^OR(100,ORIEN,5.2)=SCI  ;Store TFs (SC,MST,AO,IR,EC,HNC,CV,SHD)
 . ; Get order date for CSV/CTD/HIPAA
 . S ORFMDAT=$$ORFMDAT^ORWDBA3(ORIEN)
 . ; Go through the diagnoses entered
 . F OCT=2:1 Q:$P(DIAG(ODN),U,OCT)=""  D
 .. S DXIEN=$P($$ICDDATA^ICDXCODE("DIAGNOSIS",$P(DIAG(ODN),U,OCT),ORFMDAT),U,1)  ;Dx IEN
 .. I DXIEN=-1!(DXIEN="") Q  ;No or invalid code passed in
 .. S OCDXCT=OCDXCT+1
 .. S ^OR(100,ORIEN,5.1,0)="^100.051PA^"_OCDXCT_U_OCDXCT ;Set 5.1 zero node
 .. S ^OR(100,ORIEN,5.1,OCDXCT,0)=DXIEN  ;Store a diagnosis for order
 .. S ^OR(100,ORIEN,5.1,"B",DXIEN,OCDXCT)="" ;Index diagnosis for order
 S:Y="" Y=1```
 Leading comment lines | {::nomarkdown}Store data in ^OR(100,ODN,5.1) & ^OR(100,0DN,5.2){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIAG{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of Orders and Clinical Indicators returned from CPRS{:/} | 




 Generated on January 13th 2017, 6:55:29 am