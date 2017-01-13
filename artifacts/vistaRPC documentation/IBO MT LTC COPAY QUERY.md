---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBO MT LTC COPAY QUERY 

 property | value 
--- | --- 
 label | {::nomarkdown}IBO MT LTC COPAY QUERY{:/}
 tag | {::nomarkdown}RETURN{:/}
 routine | [IBOMTLTC](http://code.osehra.org/dox/Routine_IBOMTLTC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure will produce a report showing both MT and LTC copay information at a remote facility.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IBICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's ICN used to identify the patient at a remote facility.  This is an optional paramater, the patient's DFN if known my be passed instead.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's DFN, it is not required but will be used if passed.  If it is not passed, then the patient's ICN will be necessary.{:/} | 
| {::nomarkdown}IBBDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the starting date of the date range of the information requested.  It is required.{:/} | 
| {::nomarkdown}IBEDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ending date of the date range requested.{:/} | 




 Generated on January 13th 2017, 7:11:27 am