---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA1 GETORDX 

 property | value 
--- | --- 
 label | ORWDBA1 GETORDX
 tag | GETORDX
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | ARRAY
 description | ARRAY OF DIAGNOSES ASSOCIATED WITH AN ORDER


### Method description

 property | value 
--- | --- 
 Method comment | Retrieve Diagnoses for an order - RPC
 Leading comment lines | Input:,ORIEN    Order Internal ID#,Output:,Y        Array of Diagnoses (Dx) - Y(#)=#^DxInt#^ICD9^DxDesc^TxF,Variables used:,CT       Counter for # of Dx related to order,DXIEN    Dx internal ID,DXN      Internal (to ^OR(100)) sequence # for Dx storage,DXREC    Dx record from Order file,DXV      Dx description,ICD9     External ICD9 #,TXFACTRS Treatment Factors (TxF)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORIEN | REFERENCE | 255 | true | ORDER INTERNAL REFERENCE NUMBER | 




Generated on January 11th 2017, 6:34:23 am