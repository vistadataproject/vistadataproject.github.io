---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DDR FINDER 

 property | value 
--- | --- 
 label | DSIC DDR FINDER
 tag | FIND
 routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
 return value type | GLOBAL ARRAY
 description | Call FIND^DIC to get a list of matches on the file for the input value

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL | 20 | true | This is the number of the file in which you wish to search. | 
| vs:Input_Parameter-8994_02 | IENS | LITERAL | 30 | true | This is the IENS through which you wish to search for the value VALUE.If you are searching the top level of a file, this should be null.  Seethe FileMan Programmers manual for instructions on constructing IENSstrings. | 
| vs:Input_Parameter-8994_02 | FIELD | LITERAL | 250 | true | This is an ^ (or \;\) delimited list of fields that you wish returned fromeach entry that matches the lookup conditions that you have specified. | 
| vs:Input_Parameter-8994_02 | NUMBER | LITERAL | 5 | true | This is the maximum number of entries to be returned.  Defaults to allentries matching the lookup value VALUE. | 
| vs:Input_Parameter-8994_02 | INDEX | LITERAL | 50 | true | If you wish to do the lookup on specific indexes, then enter that here.  The index string must be compliant with the Fileman Documentation. | 
| vs:Input_Parameter-8994_02 | VALUE | LITERAL | 100 | true | Enter a value that will be used by Fileman for the lookup.  This call does not support the .VALUE syntax allowed by FIND^DIC | 
| vs:Input_Parameter-8994_02 | SCREEN | LITERAL | 250 | true | If you wish to use the DIC(\S\) equivalent then enter it here. | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL | 20 | true | This is the Fileman FLAGS parameter used in the FILE^DIC api. | 