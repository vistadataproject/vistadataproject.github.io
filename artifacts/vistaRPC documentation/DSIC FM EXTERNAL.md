---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC FM EXTERNAL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC FM EXTERNAL{:/}
 tag | {::nomarkdown}EXTERNAL{:/}
 routine | [DSICFM06](http://code.osehra.org/dox/Routine_DSICFM06_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will convert an internal formatted data to external format.  This differs from the GET Fileman calls in that a record ien is not required.  However, it is the responsibility of the developer to make sure that for the particular file (or subfile) and field that the DD will output the data without an internal number (e.g., DA is not defined).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file (or subfile) which has that field.{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the field number for the data to be converted to external.{:/} | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the value in internal Fileman format to be converted to external format.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}