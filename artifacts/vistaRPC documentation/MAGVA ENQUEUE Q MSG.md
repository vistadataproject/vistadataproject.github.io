---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA ENQUEUE Q MSG 

 property | value 
--- | --- 
 label | MAGVA ENQUEUE Q MSG
 tag | ADDQM
 routine | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
 return value type | SINGLE VALUE
 description | Add a record to QUEUE MESSAGE file (#2006.928)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true | MAGPARAM(\EXPIRATION DATETIME\) MAGPARAM(\EARLIEST DELIVERY DATE/TIME\) MAGPARAM(\PRIORITY\) = 1..99 MAGPARAM(\QUEUE\) = Pointer to QUEUE file (#2006.927) MAGPARAM(\MESSAGE GROUP ID\) = value of the field \MESSAGE GROUP ID\                                 in QUEUE file (#2006.927) or \*\ or \\ | 
| MAGMSG | LIST |  | true | MAGMSG(1..n)= MESSAGE | 