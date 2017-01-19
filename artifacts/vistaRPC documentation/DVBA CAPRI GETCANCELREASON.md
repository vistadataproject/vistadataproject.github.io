---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBA CAPRI GETCANCELREASON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBA CAPRI GETCANCELREASON{:/}
 tag | {::nomarkdown}CANRSN{:/}
 routine | [DVBCANRS](http://code.osehra.org/dox/Routine_DVBCANRS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This returns an array of active 2507 EXAM Cancellation Reasons. New active reasons added with Patch DVB*2.7*189. Old list of cancellation reasons set to inactive.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}THE ARRAY OF ACTIVE REASONS{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}