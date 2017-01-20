---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG QUE LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG QUE LIST{:/}
 tag | {::nomarkdown}QUELIST{:/}
 routine | [MAGGTU7](http://code.osehra.org/dox/Routine_MAGGTU7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Queues a list of images to be copied from jukebox to harddrive. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}  A Code containing A  F  B     if [ A  then Abstracts will be queued.     if [ F  then Full Resolution image will be queued.     if [ B  then BIG file ( Xray 2k x 2k ) will be queued.{:/} | 
| {::nomarkdown}LIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The list of Image IEN's to be queued.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}