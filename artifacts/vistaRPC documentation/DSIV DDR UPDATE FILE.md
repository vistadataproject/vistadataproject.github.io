---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV DDR UPDATE FILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV DDR UPDATE FILE{:/}
 tag | {::nomarkdown}UPDATE{:/}
 routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will add a new record to a file, but only at the top level of the file.   It does not allow for adding a new record to a multiple. Additional fields to be filed at the same time can be passed.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file for which a new record is to be added{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of fields which will have data for filing with the newrecord.  Obviously the .01 field must be present.  Format of data array:  DATA(field#)=internal value   On the GUI side, Param.List['field#']= value{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:54 am</p>{:/}