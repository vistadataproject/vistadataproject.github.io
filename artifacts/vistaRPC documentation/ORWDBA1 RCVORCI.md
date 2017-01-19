---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA1 RCVORCI 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 RCVORCI{:/}
 tag | {::nomarkdown}RCVORCI{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Receive Order Entry Billing Aware data from CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DIAG{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of Orders and Clinical Indicators returned from CPRS{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RCVORCI^[ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 Method comment | Receive order related Clinical Indicators & Diagnoses from GUI
 First comment | {::nomarkdown}<pre> Store data in ^OR(100,ODN,5.1) & ^OR(100,0DN,5.2)<br/></pre>{:/}
 Input parameters | {::nomarkdown}DIAG{:/}
 Code | {::nomarkdown}  N DXIEN,ODN,ORIEN,SCI,OCDXCT,OCT<br> S ODN="",OCDXCT=0,Y=""<br> F  S ODN=$O(DIAG(ODN)) Q:ODN=""  D<br> . S ORIEN=$P(DIAG(ODN),";",1)  ;Order IEN<br> . I ORIEN'?1N.N S Y=0 Q<br> . K ^OR(100,ORIEN,5.1) ;Clear currently stored diagnosis for rewrite<br> . ; Data from Delphi format: ORIEN;11CNNNCNN^exDx1^exDx2^exDx3^exDx4<br> . ; Convert 8 Tx Factors<br> . S SCI=$$TFGUIGBL($RE($E($RE($P(DIAG(ODN),U)),1,8)))<br> . S ^OR(100,ORIEN,5.2)=SCI  ;Store TFs (SC,MST,AO,IR,EC,HNC,CV,SHD)<br> . ; Get order date for CSV/CTD/HIPAA<br> . S ORFMDAT=$$ORFMDAT^ORWDBA3(ORIEN)<br> . ; Go through the diagnoses entered<br> . F OCT=2:1 Q:$P(DIAG(ODN),U,OCT)=""  D<br> .. S DXIEN=$P($$ICDDATA^ICDXCODE("DIAGNOSIS",$P(DIAG(ODN),U,OCT),ORFMDAT),U,1)  ;Dx IEN<br> .. I DXIEN=-1!(DXIEN="") Q  ;No or invalid code passed in<br> .. S OCDXCT=OCDXCT+1<br> .. S ^OR(100,ORIEN,5.1,0)="^100.051PA^"_OCDXCT_U_OCDXCT ;Set 5.1 zero node<br> .. S ^OR(100,ORIEN,5.1,OCDXCT,0)=DXIEN  ;Store a diagnosis for order<br> .. S ^OR(100,ORIEN,5.1,"B",DXIEN,OCDXCT)="" ;Index diagnosis for order<br> S:Y="" Y=1{:/}


### CPRS

[BA/UBACore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}