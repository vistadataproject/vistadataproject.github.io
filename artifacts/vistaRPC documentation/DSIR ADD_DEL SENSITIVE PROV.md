---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR ADD_DEL SENSITIVE PROV 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR ADD_DEL SENSITIVE PROV{:/}
 tag | {::nomarkdown}ADDPROV{:/}
 routine | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will add or delete entries in file 19620.94 (DSIR SENSITIVE PROVIDERS){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the New Person file (#200) of the person to be flagged as a sensitive provider in the ROI package.{:/} | 
| {::nomarkdown}DEL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a flag that if true will delete the record pointed to by parameter 1 from file 19620.94.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}