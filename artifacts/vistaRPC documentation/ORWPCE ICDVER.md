---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE ICDVER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ICDVER{:/}
 tag | {::nomarkdown}ICDVER{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the ICD coding system version to be used for diagnosis look-up, asof a particular date of interest.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date of interest (e.g., encounter date - time optional) against which the implementation date for ICD-10-CM will be compared.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ICDVER^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | Get ICD codeset version (i.e., ICD-9-CM or ICD-10-CM)
 Input parameters | {::nomarkdown}ORDT{:/}
 Code | {::nomarkdown}  S ORDT=+$G(ORDT) S:'ORDT ORDT=DT<br> S RESULT="ICD^ICD-9-CM"<br> G:'$L($T(IMPDATE^LEXU)) ICDVERX<br> I +$$IMPDATE^LEXU("10D")'>ORDT S RESULT="10D^ICD-10-CM"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}