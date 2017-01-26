---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XHD REMOVE PARAMETER CATEGORY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XHD REMOVE PARAMETER CATEGORY{:/}
 tag | {::nomarkdown}REMOVE{:/}
 routine | [XHDPCAT](http://code.osehra.org/dox/Routine_XHDPCAT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call removes parameter categories from their parents (i.e., \prunes\ the branch of which the the category is the root). It does NOT delete the Category or its descendents. Use the ORR DELETE PARAMETER CATEGORY to delete a given categor and all its descendents.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PCAT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (i.e., IEN) of the parameter category.{:/} | 
| {::nomarkdown}PARENT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (i.e., IEN) of the parameter category's parent.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}