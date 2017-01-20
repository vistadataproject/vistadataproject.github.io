---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF ICD LEX SEARCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF ICD LEX SEARCH{:/}
 tag | {::nomarkdown}LEXSRCH{:/}
 routine | [DSIFICD](http://code.osehra.org/dox/Routine_DSIFICD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns the ICD-10-CM category and code results of a searchbased upon a description or code value. The return is designed for displayin a tree view control.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFVAL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the description or code you wish to search for, with a 2 character minimum. This input is required.{:/} | 
| {::nomarkdown}DSIFDT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the date you wish to check for codes. This input is not required, but if not passed in it defaults to today.{:/} | 
| {::nomarkdown}DSIFLL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the maximum length of the list you wish to be returned. The default value is 30 if nothing is passed in.{:/} | 
| {::nomarkdown}DSIFF{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the Coding System View you wish to retrieve, the default is 10D (ICD-10-CM) if nothing is passed in.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}