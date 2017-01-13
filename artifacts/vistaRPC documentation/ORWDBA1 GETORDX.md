---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA1 GETORDX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 GETORDX{:/}
 tag | {::nomarkdown}GETORDX{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}ARRAY OF DIAGNOSES ASSOCIATED WITH AN ORDER{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Retrieve Diagnoses for an order - RPC
 Leading comment lines | {::nomarkdown}Input:<br/>ORIEN    Order Internal ID#<br/>Output:<br/>Y        Array of Diagnoses (Dx) - Y(#)=#^DxInt#^ICD9^DxDesc^TxF<br/>Variables used:<br/>CT       Counter for # of Dx related to order<br/>DXIEN    Dx internal ID<br/>DXN      Internal (to ^OR(100)) sequence # for Dx storage<br/>DXREC    Dx record from Order file<br/>DXV      Dx description<br/>ICD9     External ICD9 #<br/>TXFACTRS Treatment Factors (TxF){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ORDER INTERNAL REFERENCE NUMBER{:/} | 




 Generated on January 13th 2017, 6:44:47 am