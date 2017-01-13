---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETLIST 

 property | value 
--- | --- 
 label | {::nomarkdown}EC GETLIST{:/}
 tag | {::nomarkdown}SRCLST{:/}
 routine | [ECUMRPC1](http://code.osehra.org/dox/Routine_ECUMRPC1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call is used to perform a search on a file based on a search string.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input string ECARY contains six pieces separated by \^\     ECFIL  - File to search     ECSTR  - Search string     ECDIR  - Search order     ECNUM  - (Optional) Number of records to return [DEFAULT: 44]     ECADT  - (Optional) date to determine clinic status (active/inactive)     ECLOC  - (Optional) location (IEN) to filter associated clinic list{:/} | 




 Generated on January 13th 2017, 5:52:13 am