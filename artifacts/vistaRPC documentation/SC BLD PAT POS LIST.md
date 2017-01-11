---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC BLD PAT POS LIST 

 property | value 
--- | --- 
 label | SC BLD PAT POS LIST
 tag | PTPSBLD
 routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
 return value type | SINGLE VALUE
 description | Build a list of patients who are assigned to a selected position.The format of the list is ^TMP($J,\SCPOS\,n)=DFN.  This list is calledthe actual filer through another RPC.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LIST ATTRIBUTES | LIST | 512 | true |  | 