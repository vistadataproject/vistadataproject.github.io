---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA CREATE QUEUE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA CREATE QUEUE{:/}
 tag | {::nomarkdown}ADDQUEUE{:/}
 routine | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} Add a record to QUEUE file (#2006.927){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\NAME\) MAGPARAM(\ACTIVE\) = 0/1 MAGPARAM(\QUEUE TYPE\) MAGPARAM(\NUM RETRIES\) MAGPARAM(\RETRY DELAY IN SECONDS\) MAGPARAM(\TRIGGER DELAY IN SECONDS\){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}