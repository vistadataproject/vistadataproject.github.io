---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA1 GETORDX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 GETORDX{:/}
 tag | {::nomarkdown}GETORDX{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}ARRAY OF DIAGNOSES ASSOCIATED WITH AN ORDER{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ORDER INTERNAL REFERENCE NUMBER{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETORDX^[ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 Method comment | Retrieve Diagnoses for an order - RPC
 First comment | {::nomarkdown}<pre> Input:<br/>   ORIEN    Order Internal ID#<br/> Output:<br/>   Y        Array of Diagnoses (Dx) - Y(#)=#^DxInt#^ICD9^DxDesc^TxF<br/> Variables used:<br/>   CT       Counter for # of Dx related to order<br/>   DXIEN    Dx internal ID<br/>   DXN      Internal (to ^OR(100)) sequence # for Dx storage<br/>   DXREC    Dx record from Order file<br/>   DXV      Dx description<br/>   ICD9     External ICD9 #<br/>   TXFACTRS Treatment Factors (TxF)<br/></pre>{:/}
 Input parameters | {::nomarkdown}ORIEN{:/}
 Code | {::nomarkdown}  N CT,DXIEN,DXN,DXREC,DXV,ICD9,ICDR,ORFMDAT,TXFACTRS<br> S (CT,DXN)=0<br> I '$G(^OR(100,ORIEN,0)) S Y=-1<br> I '$D(^OR(100,ORIEN,5.1,1,0)) S Y=0<br> E  D  S Y=CT<br> . ; Get order date for CSV/CTD/HIPAA usage<br> . S ORFMDAT=$$ORFMDAT^ORWDBA3(ORIEN)<br> . ; Go through all Dx's for an order<br> . F  S DXN=$O(^OR(100,ORIEN,5.1,DXN)) Q:DXN'?1N.N  D<br> .. ; Get diagnosis record and IEN<br> .. S DXREC=$G(^OR(100,ORIEN,5.1,DXN,0)),DXIEN=$P(DXREC,U)<br> .. S ICDR=$$ICDDATA^ICDXCODE("DIAGNOSIS",$G(DXIEN),ORFMDAT)<br> .. S DXV=$P(ICDR,U,4),ICD9=$P(ICDR,U,2)<br> .. ; Convert internal to external Treatment Factors<br> .. S TXFACTRS=$$TFGBLGUI(^OR(100,ORIEN,5.2))<br> .. S CT=CT+1,Y(CT)=DXN_U_$G(DXIEN)_U_ICD9_U_DXV_U_TXFACTRS{:/}


### CPRS

[NOT OSEHRA CPRS]()

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}