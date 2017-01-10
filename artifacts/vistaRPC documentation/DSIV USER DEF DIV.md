---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV USER DEF DIV 

 property | value 
--- | --- 
 label | DSIV USER DEF DIV
 tag | DIV
 routine | [DSIVDUZ](http://code.osehra.org/dox/Routine_DSIVDUZ_source.html)
 return value type | SINGLE VALUE
 description | This will return the default division for a user.  If no default isindicated in the DIVISION multiple, then the return value will be:   1. if the user has only one division, and that division is not     explicitly marked as NO for default division, then return that     division  2. else, if the SITE parameter is passed with a value of 1, then     return the default value for the facility.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | XDUZ | LITERAL | 20 | true | This is the pointer to file 200 for the user for which to return thedefault division.  The default value is DUZ | 
| vs:Input_Parameter-8994_02 | SITE | LITERAL | 1 | true | This boolean flag (1 or 0) will be used if the user has no defaultdivision specified in the DIVISION multiple in file 200.  If no defaultdivision, then return the value from $$SITE^VASITE. | 