---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV DELETE UNFILED DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV DELETE UNFILED DATA{:/}
 tag | {::nomarkdown}DELU{:/}
 routine | [DENTVRHD](http://code.osehra.org/dox/Routine_DENTVRHD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Input takes in an array of IENS for deletion. Upon completion, the RPC will return an array of IENS with a message. 0^File record deleted if successful, or -1^Error deleting record if unsuccessful.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is an array of IEN records to be deleted from file 228.7{:/} | 




 Generated on January 13th 2017, 7:15:28 am