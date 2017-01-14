---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DENTV GET CATEG_CODES 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DENTV GET CATEG_CODES{:/}
 tag | {::nomarkdown}CATC{:/}
 routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This works in conjunction with the DENTV GET CATEGORIES rpc.  You passthe subcategory name and this call will return the array of cpt codesassociated with that subcategory name. end description update 6-23-2003{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the subcategory name from file 228 that was retrieved by usingthe DENTV GET CATEGORIES rpc.{:/} | 




 Generated on January 14th 2017, 7:26:35 am