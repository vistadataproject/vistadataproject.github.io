---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV PURGE AUDIT 

 property | value 
--- | --- 
 label | DSIV PURGE AUDIT
 tag | PURGE
 routine | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
 return value type | SINGLE VALUE
 description | Purge ICB AUDIT FILE entries through <date> or keeping <days>.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIV | LITERAL | 7 | true | Either a FileMan internal date, specifying the last date to purge,OR a number specifying how many days to keep. | 




Generated on January 11th 2017, 6:34:23 am