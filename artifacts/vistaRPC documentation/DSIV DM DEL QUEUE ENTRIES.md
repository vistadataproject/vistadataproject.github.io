---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV DM DEL QUEUE ENTRIES 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV DM DEL QUEUE ENTRIES{:/}
 tag | {::nomarkdown}DEL{:/}
 routine | [DSIVDM](http://code.osehra.org/dox/Routine_DSIVDM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will allow for the deletion of one or more records from file 19621.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIVL{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of records to be deleted from file 19621.  The value of each array element can be either the Transaction ID name or the IEN.    DSIVL(sub) = value{:/} | 




 Generated on January 13th 2017, 7:15:28 am