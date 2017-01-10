---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV VA DEFAULT SITE 

 property | value 
--- | --- 
 label | DSIV VA DEFAULT SITE
 tag | SITE
 routine | [DSIVVA](http://code.osehra.org/dox/Routine_DSIVVA_source.html)
 return value type | SINGLE VALUE
 description | This will return the name and station number for a medical centerdivision.  Optional input parameters are allowed.  However, if not passedthen return the data for the primary division (or institution) as ofTODAY.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DIV | LITERAL | 6 | true | This is a pointer to the medical center division file (#40.8).  If it isnot passed then return data for the primary division as of that date. | 
| vs:Input_Parameter-8994_02 | DATE | LITERAL | 7 | true | This optional Fileman date only will be used to return division data ofthat date.  Default value if not passed is TODAY. | 