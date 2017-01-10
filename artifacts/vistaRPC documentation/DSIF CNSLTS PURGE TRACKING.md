---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS PURGE TRACKING 

 property | value 
--- | --- 
 label | DSIF CNSLTS PURGE TRACKING
 tag | PURGE
 routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
 return value type | ARRAY
 description | This RPC allows for purging of tracking records from within VistA by the Authorization GUI. This will allow us to do bulk deletes through the Purge Utility found in Authorization.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFCSLT | LIST |  | true | This is a list/array of IENs that need to be removed from the FBCS Consult Tracking file (#19655). Example: DSIFCNSLTS(1)=4523DSIFCNSLTS(2)=3452DSIFCNSLTS(3)=5234 | 