---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET CLERK REQUESTS 

 property | value 
--- | --- 
 label | DSIR GET CLERK REQUESTS
 tag | GETTODAY
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns all open/pending requests for a given clerk.  This is used to populate the today screen.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLERK | LITERAL | 30 | true | The IEN for file 2 which points at the desired ROI clerk. | 
| BILLING | LITERAL | 1 | true | BILLING - The billing system is on (1) or off(0) | 