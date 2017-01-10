---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETLIST 

 property | value 
--- | --- 
 label | EC GETLIST
 tag | SRCLST
 routine | [ECUMRPC1](http://code.osehra.org/dox/Routine_ECUMRPC1_source.html)
 return value type | GLOBAL ARRAY
 description | This call is used to perform a search on a file based on a search string.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | The input string ECARY contains six pieces separated by \^\     ECFIL  - File to search     ECSTR  - Search string     ECDIR  - Search order     ECNUM  - (Optional) Number of records to return [DEFAULT: 44]     ECADT  - (Optional) date to determine clinic status (active/inactive)     ECLOC  - (Optional) location (IEN) to filter associated clinic list | 