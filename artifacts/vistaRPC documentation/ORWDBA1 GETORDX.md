---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDBA1 GETORDX 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 GETORDX{:/}
 tag | {::nomarkdown}GETORDX{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}ARRAY OF DIAGNOSES ASSOCIATED WITH AN ORDER{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ORDER INTERNAL REFERENCE NUMBER{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETORDX^[ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 Method comment | Retrieve Diagnoses for an order - RPC
 First comment | {::nomarkdown}Input:<br/>ORIEN    Order Internal ID#<br/>Output:<br/>Y        Array of Diagnoses (Dx) - Y(#)=#^DxInt#^ICD9^DxDesc^TxF<br/>Variables used:<br/>CT       Counter for # of Dx related to order<br/>DXIEN    Dx internal ID<br/>DXN      Internal (to ^OR(100)) sequence # for Dx storage<br/>DXREC    Dx record from Order file<br/>DXV      Dx description<br/>ICD9     External ICD9 #<br/>TXFACTRS Treatment Factors (TxF){:/}
 Input parameters | {::nomarkdown}ORIEN{:/}
 Code | ```  N CT,DXIEN,DXN,DXREC,DXV,ICD9,ICDR,ORFMDAT,TXFACTRS
 S (CT,DXN)=0
 I '$G(^OR(100,ORIEN,0)) S Y=-1
 I '$D(^OR(100,ORIEN,5.1,1,0)) S Y=0
 E  D  S Y=CT
 . ; Get order date for CSV/CTD/HIPAA usage
 . S ORFMDAT=$$ORFMDAT^ORWDBA3(ORIEN)
 . ; Go through all Dx's for an order
 . F  S DXN=$O(^OR(100,ORIEN,5.1,DXN)) Q:DXN'?1N.N  D
 .. ; Get diagnosis record and IEN
 .. S DXREC=$G(^OR(100,ORIEN,5.1,DXN,0)),DXIEN=$P(DXREC,U)
 .. S ICDR=$$ICDDATA^ICDXCODE("DIAGNOSIS",$G(DXIEN),ORFMDAT)
 .. S DXV=$P(ICDR,U,4),ICD9=$P(ICDR,U,2)
 .. ; Convert internal to external Treatment Factors
 .. S TXFACTRS=$$TFGBLGUI(^OR(100,ORIEN,5.2))
 .. S CT=CT+1,Y(CT)=DXN_U_$G(DXIEN)_U_ICD9_U_DXV_U_TXFACTRS```




 Generated on January 14th 2017, 7:26:36 am