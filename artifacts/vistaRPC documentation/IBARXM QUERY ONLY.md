---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBARXM QUERY ONLY 

 property | value 
--- | --- 
 label | {::nomarkdown}IBARXM QUERY ONLY{:/}
 tag | {::nomarkdown}RQUERY{:/}
 routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to query only the information for pharmacy co-paymentbilling that has happened for the given month/year.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IBICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's ICN for reference to any VistA database{:/} | 
| {::nomarkdown}IBM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is in fileman format the month/year for which the request is being made.{:/} | 




 Generated on January 13th 2017, 7:11:27 am