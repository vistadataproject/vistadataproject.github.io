---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF ICD GET LONG DESC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF ICD GET LONG DESC{:/}
 tag | {::nomarkdown}LD{:/}
 routine | [DSIFICD](http://code.osehra.org/dox/Routine_DSIFICD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will return the long description (max 245 characters) for the specified code.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFVAL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal value of the code you wish to lookup. This input is required.{:/} | 
| {::nomarkdown}DSIFFIL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the file you wish to search. This input is required. Ex.  80 - Diagnosis     80.1 - Procedure{:/} | 
| {::nomarkdown}DSIFDT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the date you wish to search to apply code set versioning. This input is optional, if no date is passed the date will default to today.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}