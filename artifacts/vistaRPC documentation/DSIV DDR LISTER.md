---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV DDR LISTER 

 property | value 
--- | --- 
 label | DSIV DDR LISTER
 tag | LIST
 routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
 return value type | GLOBAL ARRAY
 description |  This calls the Fileman lister, LIST^DIC to get a list of records matching the input value

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL | 20 | true | This is the file number of the file that will be searched | 
| vs:Input_Parameter-8994_02 | IENS | LITERAL | 30 | true | This is the standard FileMan IENS string when doing a search/lookup on a multiple in a file. | 
| vs:Input_Parameter-8994_02 | FIELD | LITERAL | 250 | true | ';' delimited list of fields requested for each record | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL | 15 | true | This is the FLAGS parameter for the LIST^DIC API | 
| vs:Input_Parameter-8994_02 | NUMBER | LITERAL | 4 | true | Enter the maximum number of matching records you wish to retrieve. | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL | 50 | true | Enter the string that will be the starting value to use when transversing the indexes looking for a match. | 
| vs:Input_Parameter-8994_02 | PARTIAL | LITERAL | 50 | true | This is the PARTIAL parameter in the LIST^DIC call. | 
| vs:Input_Parameter-8994_02 | INDEX | LITERAL | 50 | true | Enter the string of index names (separated by '^') which the search will transverse | 
| vs:Input_Parameter-8994_02 | SCREEN | LITERAL | 250 | true | If you wish to screen entries, then enter that executable M code. This is the same as DIC(\S\) | 
| vs:Input_Parameter-8994_02 | IDENTIFY | LITERAL | 50 | true | This is the IDENTIFIER parameter in LIST^DIC call | 