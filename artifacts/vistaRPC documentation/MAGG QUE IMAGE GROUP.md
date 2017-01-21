---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG QUE IMAGE GROUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG QUE IMAGE GROUP{:/}
 tag | {::nomarkdown}QUEGROUP{:/}
 routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC Call to queue all images of an  Image group for a copy from JukeBox.  This can also be a PREFETCH, in which case the Images being  Queued have a lower priority than other copies from JukeBox{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the Image Group in MAG(2005 file.{:/} | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}        ; CODE is a string code for which images to Queue        ;     [\A\ Abatract        ;     [\F\ Full Resolution        ;     [\B\ Big File{:/} | 
| {::nomarkdown}QCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown} QCODE is a QUEUE code.  If = 1 then this is a prefetch{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}