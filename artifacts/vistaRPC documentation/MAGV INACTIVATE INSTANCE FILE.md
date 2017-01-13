---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE INSTANCE FILE 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV INACTIVATE INSTANCE FILE{:/}
 tag | {::nomarkdown}INFILE{:/}
 routine | [MAGVRS31](http://code.osehra.org/dox/Routine_MAGVRS31_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC inactivates an instance file entry.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILEIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the IEN of the instance file entry to be inactivated.{:/} | 
| {::nomarkdown}SOPIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the IEN of the related SOP entry.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.{:/} | 




 Generated on January 13th 2017, 5:52:13 am