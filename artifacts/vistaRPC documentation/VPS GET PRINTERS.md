---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS GET PRINTERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET PRINTERS{:/}
 tag | {::nomarkdown}DEVICE{:/}
 routine | [VPSPRINT](http://code.osehra.org/dox/Routine_VPSPRINT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns up to 20 entries from the device file based on Input Criteria.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter is used to filter the output by returning result start with or start from (up to 20 printers). Example: Input Parameter \B\ will return all printers (up to 20) start *with* \B\Example: Input Parameter \B*\ will return all printers (up to 20) start *from* \B\{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter causes output result to be sorted in printer name ascending or descending order.Input Parameter: 1 (return printer names in ascending order)Input Parameter: -1 (return printer names in descending order){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}