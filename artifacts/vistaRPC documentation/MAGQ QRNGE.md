---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ QRNGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ QRNGE{:/}
 tag | {::nomarkdown}QRNGE{:/}
 routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This procedure is to either delete or re-queue a range of Vista ImagingBackground Processor queues.  The process parameter determines the action.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}QUEUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This determines the queue type that will be processed.{:/} | 
| {::nomarkdown}PROCESS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This determines whether the queue will be requeued or deleted.  Avalue of \DEL\ will designate a delete and a value of \REQ\ willdesignate a requeue.{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value will determine the start of the range of Queue file (#2006.03) entries that will be processed.{:/} | 
| {::nomarkdown}STOP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This will determine the last Queue file entry that will be processed.{:/} | 
| {::nomarkdown}PLACE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value designates the Imaging site parameter entryfor which the queues to be processed are associated.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}