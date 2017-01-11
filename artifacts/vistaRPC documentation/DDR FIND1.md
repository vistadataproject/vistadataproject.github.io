---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DDR FIND1 

 property | value 
--- | --- 
 label | DDR FIND1
 tag | FIND1C
 routine | [DDR2](http://code.osehra.org/dox/Routine_DDR2_source.html)
 return value type | ARRAY
 description | This function returns the internal entry number of a record using$$FIND1^DIC.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMETERS | LIST | 512 | true | This array contains the following parameters necessary to call$$FIND1^DIC.    \FILE\ the file or subfile number to search   \IENS\ the IENS that identifies the subfile if FILE is a subfile number   \FLAGS\ possible values include:        A  allow pure numeric input to always be tried as an IEN        M  multiple index allowed        O  only find an exact match if possible        Q  quick lookup        X  exact match only        R  record the ien in ^DISV via RECALL^DILFD   \VALUE\ the lookup value   \XREF\ the indexes that would be searched for a match   \SCREEN\ screen to apply to the record found | 




Generated on January 11th 2017, 6:34:23 am