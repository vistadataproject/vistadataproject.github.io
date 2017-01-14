---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM GET WH REPORT TEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM GET WH REPORT TEXT{:/}
 tag | {::nomarkdown}WHREPORT{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will return the Radiology/Lab Report for a WH Procedure{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORIEN{:/}
 Lines | {::nomarkdown} D RESULTS^WVALERTF(.ORY,ORIEN) Q{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IEN is equal the Women's Health Procedure IEN{:/} | 




 Generated on January 13th 2017, 7:15:28 am