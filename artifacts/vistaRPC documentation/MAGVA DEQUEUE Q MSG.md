---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA DEQUEUE Q MSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA DEQUEUE Q MSG{:/}
 tag | {::nomarkdown}DEQM{:/}
 routine | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} Find, return and remove a message from the QUEUE MESSAGE file (#2006.928) by QUEUE FK - IEN of record in QUEUE file (#2006.927) and by MESSAGE GROUP ID. If \MESSAGE GROUP ID\ equals \*\ it ignores \MESSAGE GROUP ID\. If \MESSAGE GROUP ID\ equals \\ it looks only at queue messages with blank \MESSAGE GROUP ID\. Otherwise looks at queue messages with MESSAGE GROUP ID{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}MAGPARAM(\QUEUE\) = IEN in QUEUE file (#2006.927)MAGPARAM(\MESSAGE GROUP ID\) = value of the field \MESSAGE GROUP ID\                               in QUEUE file (#2006.927) or \*\ or \\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}