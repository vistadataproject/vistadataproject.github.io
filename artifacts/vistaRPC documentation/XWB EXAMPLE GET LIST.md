---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB EXAMPLE GET LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XWB EXAMPLE GET LIST{:/}
 tag | {::nomarkdown}GETLIST{:/}
 routine | [XWBEXMPL](http://code.osehra.org/dox/Routine_XWBEXMPL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC brings back a list of elements to the client.  The user can requesteither a number of lines or a number of Kilobytes of data to be returned.This RPC exists support of RPC Broker Example program.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ITEMS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter can be only one of two values:  LINES     - RPC will return a number of lines  KILOBYTES - RPC will return a number of kilobytes of data{:/} | 
| {::nomarkdown}QUANTITY{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Either a number of lines or a number of kilobytes to send back.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}