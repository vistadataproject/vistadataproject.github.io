---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA UPDATE ARETPOL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA UPDATE ARETPOL{:/}
 tag | {::nomarkdown}UPDARP{:/}
 routine | [MAGVAU01](http://code.osehra.org/dox/Routine_MAGVAU01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Update ARTIFACT RETENTION POLICY file (#2006.921) If Is Satisfied is passed in as true (1), set SatisfiedDateTime to \NOW\.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\PK\) = IEN of record in  ARTIFACT RETENTION POLICY file (#2006.921) MAGPARAM(\ACTIVE\) = 0/1{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}