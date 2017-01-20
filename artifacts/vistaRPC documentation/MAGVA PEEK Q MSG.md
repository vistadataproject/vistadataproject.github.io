---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA PEEK Q MSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA PEEK Q MSG{:/}
 tag | {::nomarkdown}PEEKQM{:/}
 routine | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} Get a queue message from the QUEUE MESSAGE file (#2006.928) by QUEUE - IEN of record in QUEUE file (#2006.927) and by MESSAGE GROUP ID. If \MESSAGE GROUP ID\ equals \*\ it ignores \MESSAGE GROUP ID\. If \MESSAGE GROUP ID\ equals \\ it looks only at queue messages with blank \MESSAGE GROUP ID\. Otherwise looks at queue messages with MESSAGE GROUP ID{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}MAGPARAM(\QUEUE\) = IEN in file (#2006.927)MAGPARAM(\MESSAGE GROUP ID\) = value of the field \MESSAGE GROUP ID\                                                                   in file (#2006.927) or \*\ or \\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}