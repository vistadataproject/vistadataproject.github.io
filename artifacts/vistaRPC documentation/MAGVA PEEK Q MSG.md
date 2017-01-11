---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA PEEK Q MSG 

 property | value 
--- | --- 
 label | MAGVA PEEK Q MSG
 tag | PEEKQM
 routine | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
 return value type | ARRAY
 description |  Get a queue message from the QUEUE MESSAGE file (#2006.928) by QUEUE - IEN of record in QUEUE file (#2006.927) and by MESSAGE GROUP ID. If \MESSAGE GROUP ID\ equals \*\ it ignores \MESSAGE GROUP ID\. If \MESSAGE GROUP ID\ equals \\ it looks only at queue messages with blank \MESSAGE GROUP ID\. Otherwise looks at queue messages with MESSAGE GROUP ID

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true | MAGPARAM(\QUEUE\) = IEN in file (#2006.927)MAGPARAM(\MESSAGE GROUP ID\) = value of the field \MESSAGE GROUP ID\                                                                   in file (#2006.927) or \*\ or \\ | 