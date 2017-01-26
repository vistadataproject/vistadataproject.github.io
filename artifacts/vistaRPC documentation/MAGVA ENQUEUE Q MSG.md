---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA ENQUEUE Q MSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA ENQUEUE Q MSG{:/}
 tag | {::nomarkdown}ADDQM{:/}
 routine | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a record to QUEUE MESSAGE file (#2006.928){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}MAGPARAM(\EXPIRATION DATETIME\) MAGPARAM(\EARLIEST DELIVERY DATE/TIME\) MAGPARAM(\PRIORITY\) = 1..99 MAGPARAM(\QUEUE\) = Pointer to QUEUE file (#2006.927) MAGPARAM(\MESSAGE GROUP ID\) = value of the field \MESSAGE GROUP ID\                                 in QUEUE file (#2006.927) or \*\ or \\{:/} | 
| {::nomarkdown}MAGMSG{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}MAGMSG(1..n)= MESSAGE{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}