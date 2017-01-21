---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ QUD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ QUD{:/}
 tag | {::nomarkdown}QUPDTE{:/}
 routine | [MAGQBTM](http://code.osehra.org/dox/Routine_MAGQBTM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Updates the status field in the specified queue record.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The internal entry number of the Vista Imaging Queue file - the queue itemto be updated.{:/} | 
| {::nomarkdown}UPDATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The message string result of the process:piece 1 if positive indicates the successful completion of the queue task       if negative indicates that the queue was not successfully completedpiece 2 is the process messagepiece 3 contains the network location reference (IEN) of the location    successfully copied to by the queue task{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}