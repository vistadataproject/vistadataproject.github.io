---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV DDR UPDATE SUBFILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV DDR UPDATE SUBFILE{:/}
 tag | {::nomarkdown}UPDATE1{:/}
 routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} This will add a new record to a multiple in a file.   The multiple can be at any level as long as the IENS is properly defined.  Additional fields can filed with the record.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown} This is the number of the subfile to which a new record is to be added{:/} | 
| {::nomarkdown}IENS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown} This is the standard Fileman DBS parameter for calling UPDATE^DIE when adding a record to a multiple in a file.  If IENS is not passed or is passed as <null>, then this will add the record at the top level of the file.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown} This is a list of fields and their internal values to be filed with the new record.  Obviously the .01 field should have a value to be filed.   The format of the DATA array: DATA(field#)=value  On the GUI side this would be:  Param.List['field#'] := value{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}