---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DDR FIND1 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DDR FIND1{:/}
 tag | {::nomarkdown}FIND1C{:/}
 routine | [DDR2](http://code.osehra.org/dox/Routine_DDR2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This function returns the internal entry number of a record using$$FIND1^DIC.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETERS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This array contains the following parameters necessary to call$$FIND1^DIC.    \FILE\ the file or subfile number to search   \IENS\ the IENS that identifies the subfile if FILE is a subfile number   \FLAGS\ possible values include:        A  allow pure numeric input to always be tried as an IEN        M  multiple index allowed        O  only find an exact match if possible        Q  quick lookup        X  exact match only        R  record the ien in ^DISV via RECALL^DILFD   \VALUE\ the lookup value   \XREF\ the indexes that would be searched for a match   \SCREEN\ screen to apply to the record found{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}