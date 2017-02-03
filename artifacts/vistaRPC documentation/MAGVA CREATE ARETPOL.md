---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA CREATE ARETPOL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA CREATE ARETPOL{:/}
 tag | {::nomarkdown}ADDARP{:/}
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Create a new record in Artifact Retention Policy file (#2006.921).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\ARTIFACT\)           = A pointer to ARTIFACT file (#2006.916) MAGPARAM(\RETENTION POLICY\)   = A pointer to RETENTION POLICY file (#2006.914) MAGPARAM(\SATISFIED DATE/TIME\) = DateTime in IDF format (YYYYMMDD.HHMMSS){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}