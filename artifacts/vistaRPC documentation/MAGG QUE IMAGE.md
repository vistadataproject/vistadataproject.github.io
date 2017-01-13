---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG QUE IMAGE 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGG QUE IMAGE{:/}
 tag | {::nomarkdown}QUEIMAGE{:/}
 routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Queues images to be copied from JukeBox to harddrive. (to the Image Write Directory){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A Code containing A  F  B    if [ A  then Abstracts will be queued.   if [ F  then Full Resolution image will be queued   if [ B  then BIG file ( Xray 2k x 2k ) will be queued{:/} | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN from Image File ^MAG(2005  to be queued.{:/} | 




 Generated on January 13th 2017, 7:15:28 am