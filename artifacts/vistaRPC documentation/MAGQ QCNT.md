---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ QCNT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ QCNT{:/}
 tag | {::nomarkdown}QCNT{:/}
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call resets the Queue pointer settings in the Imaging Queue Pointer file, #2006.031.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}place{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field represents the internal entry number of the site parameter file, #2006.1.{:/} | 
| {::nomarkdown}QUEUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}33{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the queue entry to be updated by this method.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}