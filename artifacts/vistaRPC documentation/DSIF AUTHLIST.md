---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF AUTHLIST 

 property | value 
--- | --- 
 label | DSIF AUTHLIST
 tag | AUTHLIST
 routine | [DSIFENA2](http://code.osehra.org/dox/Routine_DSIFENA2_source.html)
 return value type | GLOBAL ARRAY
 description | Pass in IEN (DFN), return list of current authorizations or -1^Not a valid patient or -1^Not a valid patient

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 30 | true | Pass in Patient File IEN (file #2)  | 
| FLAG | LITERAL | 1 | true |     FLAG=\\ OR \0\ Outpatient authorizations only (excludes Unauthorized)    FLAG=\1\ Inpatient auths onlY    FLAG=\2\ Both Outpt, Inpt. & Unauthorized | 
| DSIFDAT | LITERAL | 7 | true |   Enter the to date (in FM format) to restrict the number of records  returned.    Example: If you enter 3100501 the RPC will return all authorizations up  to May 1, 2010.    This field can also be used in conjunction with DSIFFDAT to produce a  specific time period in which authorizations to be returned. | 
| DSIFFDAT | LITERAL | 7 | true |  Enter a from date (in FM format) to limit the authorizations returned.    Example: If you enter 3090101 it will only return authorizations between  today and January 1, 2009. | 
| DSIF AUTHLIST |  |  |  |  | 