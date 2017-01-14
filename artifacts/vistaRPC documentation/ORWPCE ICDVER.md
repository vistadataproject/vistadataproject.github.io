---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE ICDVER 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ICDVER{:/}
 tag | {::nomarkdown}ICDVER{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the ICD coding system version to be used for diagnosis look-up, asof a particular date of interest.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date of interest (e.g., encounter date - time optional) against which the implementation date for ICD-10-CM will be compared.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ICDVER^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | Get ICD codeset version (i.e., ICD-9-CM or ICD-10-CM)
 Input parameters | {::nomarkdown}ORDT{:/}
 Code | ```  S ORDT=+$G(ORDT) S:'ORDT ORDT=DT<br/> S RESULT="ICD^ICD-9-CM"<br/> G:'$L($T(IMPDATE^LEXU)) ICDVERX<br/> I +$$IMPDATE^LEXU("10D")'>ORDT S RESULT="10D^ICD-10-CM"```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}