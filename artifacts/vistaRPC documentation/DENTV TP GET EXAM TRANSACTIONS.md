---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP GET EXAM TRANSACTIONS 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP GET EXAM TRANSACTIONS{:/}
 tag | {::nomarkdown}GETFEX{:/}
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will return a complete list of exam transactions for a specified patient. The array is organized by node, not by date. For example all of the \OHA\ Oral Health Assessment data is returned together. See GETFEX^DENTVTP7 comments for details.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DPAT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This value should be the Patient IEN.{:/} | 




 Generated on January 13th 2017, 7:11:27 am