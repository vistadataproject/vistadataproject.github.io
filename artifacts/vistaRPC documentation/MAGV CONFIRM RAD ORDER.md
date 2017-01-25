---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV CONFIRM RAD ORDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV CONFIRM RAD ORDER{:/}
 tag | {::nomarkdown}CONFIRM{:/}
 routine | [MAGVIM06](http://code.osehra.org/dox/Routine_MAGVIM06_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a RAD/NUC MED ORDERS file (#75.1) IEN for a set of DICOM Unique Identifiers.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UIDS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Study, Series, and SOP Instance UID, \`\-delimited. Used by the Importer II applicationto verify the RAD/NUC MED ORDERS file (#75.1) IEN for an object which is determined tobe on file via a prior call to RPC: MAGV IMPORT STATUS.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}