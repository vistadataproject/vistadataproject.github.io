---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV GET CATEGORIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV GET CATEGORIES{:/}
 tag | {::nomarkdown}CAT{:/}
 routine | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This rpc will return the different categories (fields 5 & 6) in file 228{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is optional.  If passed it should be either 1, 2, or 12If it is not passed, then this call will default to 12 For file 228,  If TYP=1, then only return the subcategory-1 names (field 5)  If TYP=2, then only return the subcategory-2 names (field 6)  If TYP=12, then return both subcategories' names{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}