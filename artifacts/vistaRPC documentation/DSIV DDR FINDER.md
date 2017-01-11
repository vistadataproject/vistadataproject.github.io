---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV DDR FINDER 

 property | value 
--- | --- 
 label | DSIV DDR FINDER
 tag | FIND
 routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
 return value type | GLOBAL ARRAY
 description | Call FIND^DIC to get a list of matches on the file for the input value

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 20 | true | This is the number of the file in which you wish to search. | 
| IENS | LITERAL | 30 | true | This is the IENS through which you wish to search for the value VALUE. If you are searching the top level of a file, this should be null. See the FileMan Programmer's Manual for instructions on constructing IENS strings. | 
| FIELD | LITERAL | 250 | true |  This is an ^ (or \;\) delimited list of fields that you wish returned from each entry that matches the lookup conditions that you have specified. | 
| NUMBER | LITERAL | 5 | true | This is the maximum number of entries to be returned. Defaults to all entries matching the lookup value VALUE. | 
| INDEX | LITERAL | 50 | true | If you wish to do the lookup on specific indexes, then enter that here. The index string must be compliant with the FileMan documentation. | 
| VALUE | LITERAL | 100 | true | Enter a value that will be used by FileMan for the lookup. This call does not support the .VALUE syntax allowed by FIND^DIC. | 
| SCREEN | LITERAL | 250 | true | If you wish to use the DIC(\S\) equivalent then enter it here. | 
| FLAGS | LITERAL | 20 | true | This is the FileMan FLAGS parameter used in the FILE^DIC API. | 