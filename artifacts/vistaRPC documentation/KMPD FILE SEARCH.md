---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD FILE SEARCH 

 property | value 
--- | --- 
 label | KMPD FILE SEARCH
 tag | FILESRC
 routine | [KMPDU5](http://code.osehra.org/dox/Routine_KMPDU5_source.html)
 return value type | GLOBAL ARRAY
 description | Search for entries in file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM1 | LITERAL | 60 | true | File Number. | 
| PARAM2 | LITERAL | 245 | true | Fields to return.  This will be comma delimited. Example:  \.01,.04,1,12\  - would return fields .01, .01, 1 and 12 | 
| PARAM3 | LITERAL | 245 | true | Text to search for. Example:  \DG\ - would retrieve all entries beginning with DG.                - if text equals \*\ or \\ (null) then all entries will be                  retrieved | 
| PARAM4 | LITERAL | 245 | true | Name of array for temporary storage.  This should be a global array, andmust be either ^TMP or ^UTILITY. | 




Generated on January 11th 2017, 6:34:23 am