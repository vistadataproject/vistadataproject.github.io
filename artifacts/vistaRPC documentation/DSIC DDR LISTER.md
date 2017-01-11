---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DDR LISTER 

 property | value 
--- | --- 
 label | DSIC DDR LISTER
 tag | LIST
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | GLOBAL ARRAY
 description | This calls the Fileman lister, LIST^DIC to get a list of records matching the input value

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 20 | true | This is the file number of the file that will be searched | 
| IENS | LITERAL | 30 | true | This is the standard Fileman IENS string when doing a search/lookup on a multiple in a file. | 
| FIELD | LITERAL | 250 | true | ';' delimited list of fields requested for each record | 
| FLAGS | LITERAL | 15 | true | This is the FLAGS parameter for the LIST^DIC api | 
| NUMBER | LITERAL | 4 | true | Enter the maximum number of matching records you wish to retrieve. | 
| FROM | LITERAL | 50 | true | Enter the string that will be the starting value to use when transversing the indexes looking for a match. | 
| PARTIAL | LITERAL | 50 | true | This is the PARTIAL parameter in the LIST^DIC call. | 
| INDEX | LITERAL | 50 | true | Enter the string of index names (separated by '^') which the search willtransverse | 
| SCREEN | LITERAL | 250 | true | If you wish to screen entries, then enter that executable M code.  This is the same as DIC(\S\) | 
| IDENTIFY | LITERAL | 50 | true | This is the IDENTIFIER parameter in LIST^DIC call | 




 Generated on January 11th 2017, 7:15:04 am