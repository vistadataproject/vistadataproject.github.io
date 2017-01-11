---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF GET OBLIG 

 property | value 
--- | --- 
 label | DSIF GET OBLIG
 tag | GETOBLIG
 routine | [DSIFBAT5](http://code.osehra.org/dox/Routine_DSIFBAT5_source.html)
 return value type | GLOBAL ARRAY
 description | Used to return a list of obligations based upon Control point and number of years past to return.  Example, control point 038 with 2 years, will return all obligations from control point 038 from today - two years to today on error returns -1^error message

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FUND CONTROL POINT | LITERAL | 99 | true | Pass in the control point used to return current obligations. | 
| FBYEAR | LITERAL | 4 | true | Years to search for existing obligations, default is current year and last year.  If you input 3 it will display current year and go back 3 years. | 