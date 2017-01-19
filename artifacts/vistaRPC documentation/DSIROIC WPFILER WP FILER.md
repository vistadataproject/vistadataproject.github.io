---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIROIC WPFILER WP FILER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIROIC WPFILER WP FILER{:/}
 tag | {::nomarkdown}WPFILER{:/}
 routine | [DSIROIC](http://code.osehra.org/dox/Routine_DSIROIC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to update comments is several places withing the Release of Information Record Manager (ROI/DSIR){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The IEN (Internal Entry Number) is the location within the file where the data is to be filed.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown} TYPE    - Must be \C\, \I\, \A\, OR \R\ as follows:           Regular comments (19620,.31)(C)           Internal Comments (19620,.32)(I)            Annotations (19620.98,100)(A)           Released Document Comment (19620.1,1)(R){:/} | 
| {::nomarkdown}STRLIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}9999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}STRLIST - List (ARRAY) of lines to be filed{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}