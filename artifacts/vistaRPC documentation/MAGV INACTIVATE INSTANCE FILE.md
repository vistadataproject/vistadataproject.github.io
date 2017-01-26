---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE INSTANCE FILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV INACTIVATE INSTANCE FILE{:/}
 tag | {::nomarkdown}INFILE{:/}
 routine | [MAGVRS31](http://code.osehra.org/dox/Routine_MAGVRS31_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC inactivates an instance file entry.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILEIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the IEN of the instance file entry to be inactivated.{:/} | 
| {::nomarkdown}SOPIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the IEN of the related SOP entry.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}