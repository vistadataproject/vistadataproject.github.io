---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE DELETE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will delete orphan entries in the Template file (i.e., onlythose entries that have been removed from any Groups, Classes, Personalor Shared Root entries).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Delete TEMPLATES
 Leading comment lines | {::nomarkdown}Pass TIUDA as array of record numbers to be deleted by reference<br/>SUCCESS will be returned as the actual number of templates deleted{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of records which are to be deleted.{:/} | 




 Generated on January 13th 2017, 6:44:47 am