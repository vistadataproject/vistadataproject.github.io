---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS DEL TRACKING 

 property | value 
--- | --- 
 label | DSIF CNSLTS DEL TRACKING
 tag | DELETE
 routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
 return value type | SINGLE VALUE
 description | This RPC will delete FBCS Consult Tracking Records (truly mark as hidden) so they will no longer be returned. The Consult Tracking records are not truly deleted as they are still being used to look for Comment/Significant Finding updates that may occur. After 90 days of inactivity, they are removed from the file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFCSLT | LITERAL |  | true | This is the IEN of the Consult you wish to delete (hide) from being returned. | 




 Generated on January 11th 2017, 7:15:04 am