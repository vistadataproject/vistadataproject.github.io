---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV UPDATE COMMENT SORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV UPDATE COMMENT SORT{:/}
 tag | {::nomarkdown}UPDATE{:/}
 routine | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will re-sort a providers canned comments within a category. It will return a 1^Successful or -1^Unsuccessful.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DENTV{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This should be a list of \CATEGORY^SORT ORDER^IEN\ for all of the canned comments for the provider.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}