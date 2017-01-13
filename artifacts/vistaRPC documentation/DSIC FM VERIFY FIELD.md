---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC FM VERIFY FIELD 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC FM VERIFY FIELD{:/}
 tag | {::nomarkdown}VFIELD{:/}
 routine | [DSICFM06](http://code.osehra.org/dox/Routine_DSICFM06_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will verify whether or not a field exists in a file (or subfile).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file (or subfile) or the full file name which contains the field to be verified.{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This the the number of the field or its full field name.{:/} | 




 Generated on January 13th 2017, 7:11:27 am