---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG UTIL JBOFFLN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG UTIL JBOFFLN{:/}
 tag | {::nomarkdown}LINE{:/}
 routine | [MAGSDOFL](http://code.osehra.org/dox/Routine_MAGSDOFL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Track Offline JukeBox images  Take Image files Offline This Remote Prcedure will add the new entry in MAGQUEUE(2006.033).The platter volume name will be used to index with IMAGE file IEN.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TXTLine{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Text line in Offline Platter report.TXT{:/} | 
| {::nomarkdown}PLATTER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}JUKEOX PLATTER NAME(LABEL){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}