---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ CUPDTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ CUPDTE{:/}
 tag | {::nomarkdown}CUPD{:/}
 routine | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used by the purge routine to update the magnetic references inthe image file(#2005) for images have migrated to heretofore unmappednetwork locations.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILEPATH{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the network path on which the image file was found.{:/} | 
| {::nomarkdown}FNAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the filename, including extension, which requires its locationupdated. {:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the image file (#2005) which requiresupdating.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}