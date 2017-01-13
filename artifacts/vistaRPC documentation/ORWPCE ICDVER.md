---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE ICDVER 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ICDVER{:/}
 tag | {::nomarkdown}ICDVER{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the ICD coding system version to be used for diagnosis look-up, asof a particular date of interest.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Get ICD codeset version (i.e., ICD-9-CM or ICD-10-CM)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date of interest (e.g., encounter date - time optional) against which the implementation date for ICD-10-CM will be compared.{:/} | 




 Generated on January 13th 2017, 5:52:13 am