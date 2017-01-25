---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CNSLTS PURGE TRACKING 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CNSLTS PURGE TRACKING{:/}
 tag | {::nomarkdown}PURGE{:/}
 routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows for purging of tracking records from within VistA by the Authorization GUI. This will allow us to do bulk deletes through the Purge Utility found in Authorization.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFCSLT{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list/array of IENs that need to be removed from the FBCS Consult Tracking file (#19655). Example: DSIFCNSLTS(1)=4523DSIFCNSLTS(2)=3452DSIFCNSLTS(3)=5234{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}