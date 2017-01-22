---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG QUE PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG QUE PATIENT{:/}
 tag | {::nomarkdown}QUEPAT{:/}
 routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is called for a PREFETCH, the images queued this way have a   lower priority than other copy from JukeBox queues.Queues all images for a patient.  i.e. All images for a patient will becopied from the jukebox to the harddrive.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patients DFN.{:/} | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}        ; CODE is a string code for which images to Queue        ;     [\A\ Abatract        ;     [\F\ Full Resolution        ;     [\B\ Big File{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}