---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA1 SCLST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 SCLST{:/}
 tag | {::nomarkdown}SCLST{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Array of Order ID's and SC.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN.{:/} | 
| {::nomarkdown}ORLST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of Orders.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SCLST^[ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 Method comment | RPC for compiling appropriate TxF's
 First comment | {::nomarkdown} RPC titled ORWDBA1 SCLST<br/><br/>  Y       =    Returned value<br/>  DFN     =    Patient IEN<br/>  ORLST   =    List of orders<br/><br/> call for BA/TF{:/}
 Input parameters | {::nomarkdown}DFN<br>ORLST{:/}
 Code | {::nomarkdown}  N GMRCPROS,ORD,ORI,ORPKG<br> D CPLSTBA(.Y,DFN,.ORLST){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}