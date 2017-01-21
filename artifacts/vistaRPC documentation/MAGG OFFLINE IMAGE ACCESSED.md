---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG OFFLINE IMAGE ACCESSED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG OFFLINE IMAGE ACCESSED{:/}
 tag | {::nomarkdown}MAIL{:/}
 routine | [MAGGTU3](http://code.osehra.org/dox/Routine_MAGGTU3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This sends a message when an image has been accessed from a Jukeboxplatter that is offline, as determined by having an entry in the file ^MAGQUEUE(2006.033.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGFILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The full path and file name of the Image accessed.{:/} | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The Internal entry number in file MAG(2005.  {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}