---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV CHECK DEVICE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV CHECK DEVICE{:/}
 tag | {::nomarkdown}CHKDEV{:/}
 routine | [GMVUTL2](http://code.osehra.org/dox/Routine_GMVUTL2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC calls a KERNEL utility to return a list of printers the user may select to print output. Returns a maximum of twenty entries.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The value to begin the search in the Device file (#3.5). Can be null.{:/} | 
| {::nomarkdown}GMVDIR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Direction of the search (1 = forward, -1 = backwards).If DIR is null, then set to 1.{:/} | 
| {::nomarkdown}GMVRMAR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Right margin as a single number or range (e.g, 80, 132 or \80-132\).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}